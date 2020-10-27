<script lang="ts">
  // NOTE: yes, I know this file looks intimidating and is terrible for web devs
  // at the moment lol - I'll get to moving things around into their own component files
  // a little later. I was just focused on basic functionality and getting things
  // out there for now.

  import marked, { Slugger } from 'marked';
  import hotable from 'handsontable';
  import { onMount, tick } from 'svelte';

  // https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript
  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  hotable.renderers.registerRenderer("hex", (instance, td, row, col, prop, value, cellProperties) => {
    td.style.fontFamily = "monospace";
    td.style.fontWeight = "bold";
    td.style.textAlign = "center";
    if (typeof value === "string") {
      td.innerText = "0x" + (value.startsWith("0x") ? parseInt(value, 16) : parseInt(value)).toString(16).toUpperCase();
    } else if (typeof value === "number") {
      td.innerText = "0x" + value.toString(16).toUpperCase();
    } else {
      td.innerText = "NaN"
    }
    return td;
  })

  const tables = [];
  let TOC = [];

  const renderer: marked.Renderer = {
    // @ts-ignore
    code(code: string, language: string, isEscaped: false): string | boolean {
      if (language !== "handsontable") {
        return false;
      }

      const HOTConfig: hotable.GridSettings = {
        nestedHeaders: [[]],
        data: [],
        columns: [],
        manualColumnResize: true,
        licenseKey: "non-commercial-and-evaluation",
        mergeCells: [],
        height: 'auto',
        readOnly: true,
        modifyColWidth: (width, col) => {
          if (width > 400) {
            return 400
          }
          return width;
        }
      }

      // determines what to do and when
      let parseMode: string = null;
      let currentOptions = {};
      let currentCol = 0;
      let headingGroupPath: Array<{label: string, colspan: number}> = [];

      let matchCurrentCol = () => {
        for (const [idx, col] of HOTConfig.nestedHeaders.entries()) {
          if (headingGroupPath[idx]) {
            headingGroupPath[idx].colspan ++;
          } else {
            const currLen = col.reduce((acc, curr) => acc + ((["undefined", "string"].includes(typeof curr)) ? 1 : curr.colspan), 0);
            if (currentCol > currLen) col.push(...new Array(currentCol - currLen));
          }
        }
      }
      for (const line of code.split("\n")) {
        if (line.startsWith("# OPTIONS")) { parseMode = "options"; continue; }
        else if (line.startsWith("# COLUMNS")) { parseMode = "columns"; continue; }
        else if (line.startsWith("# DATA")) { parseMode = "data"; continue; }

        switch (parseMode) {
          case "options": {
            const options = line.split(":").map(v => v.trim());

            if (["true", "false"].includes(options[1]))
              HOTConfig[options[0]] = (options[1] === "true") ? true : false;
            else
              HOTConfig[options[0]] = options[1];

            continue;
          }
          case "columns.options": {
            if (line.trim() === "}") {
              (HOTConfig.columns as any[]).push(currentOptions);
              currentOptions = {};
              parseMode = "columns";
              continue;
            }
            const options = line.split(":").map(v => v.trim());

            if (["true", "false"].includes(options[1]))
              currentOptions[options[0]] = (options[1] === "true") ? true : false;
            else
              currentOptions[options[0]] = options[1];
            continue;
          }
          case "columns": {
            if (line.endsWith("[")) {
              headingGroupPath.push({label: line.substr(0, line.length - 2).trim(), colspan: 0});
              if (HOTConfig.nestedHeaders.length <= headingGroupPath.length) {
                const newHeaderRow = [];
                if (currentCol > 0) newHeaderRow.push(...new Array(currentCol));
                HOTConfig.nestedHeaders.push(newHeaderRow);
              }
            } else if (line.trim() === "]") {
              const newData = headingGroupPath.pop();
              HOTConfig.nestedHeaders[headingGroupPath.length].push(newData);
              // console.log("in-progress:", JSON.parse(JSON.stringify(HOTConfig.nestedHeaders)));
            } else if (line.endsWith("{")) {
              (HOTConfig.nestedHeaders as string[][])[headingGroupPath.length].push(line.substr(0, line.length - 2).trim())
              parseMode = "columns.options";
              currentCol++;
              matchCurrentCol();
            } else {
              (HOTConfig.columns as any[]).push({});
              (HOTConfig.nestedHeaders as string[][])[headingGroupPath.length].push(line.trim());
              currentCol++;
              matchCurrentCol();
            }
            continue;
          }
          case "data": {
            const rowData = line.split("|").map(d => d.trim().replace(/\\n/g, "\n"));
            const reg = /^<\$(?:w(?<width>\d+))?\s?(?:h(?<height>\d+))?\s?(?:s"(?<styling>.+?)")?\>/gm;
            for (const [col, d] of rowData.entries()) {
              const results = reg.exec(d);
              if (!results) continue;
              if (results.groups.height || results.groups.width) {
                const cellHeight = parseInt(results.groups.height) || 1;
                const cellWidth = parseInt(results.groups.width) || 1;
                const row = HOTConfig.data.length;
                (HOTConfig.mergeCells as hotable.mergeCells.Settings[]).push({
                  col,
                  row,
                  colspan: cellWidth,
                  rowspan: cellHeight
                })
              }
              rowData[col] = rowData[col].substring(results[0].length);
            }
            HOTConfig.data.push(rowData);
            continue;
          }

          default:
            continue;
        }
      }

      // HOTConfig.nestedHeaders.reverse();
      // if (HOTConfig.nestedHeaders.length > 1) console.log(HOTConfig.nestedHeaders);

      const outHTML = `<div id="HOTable-${tables.length}"></div>`;
      tables.push(HOTConfig);
      return outHTML;
    },
    // @ts-ignore
    heading(text: string, level: 1 | 2 | 3 | 4 | 5 | 6, raw: string, slugger: marked.Slugger): string | boolean {
      // @ts-ignore
      TOC = [...TOC, {text: raw, level, id: slugger.slug(raw, { dryrun: true })}];
      return false;
    },
    // @ts-ignore
    link(href: string, title: string, text: string): string | boolean {
      if (href.startsWith("/")) {
        // @ts-ignore
        return `<a href="${window.location.origin}?page=${href.substring(1, href.indexOf("#"))}&location=${new Slugger().slug(href.substr(href.indexOf("#")), {dryrun: true})}">${text}</a>`
      } else if (href.startsWith("#")) {
        // @ts-ignore
        return `<a href="${window.location.origin}?page=${localStorage.getItem("lastPage")}&location=${new Slugger().slug(href.substr(1), {dryrun: true})}">${text}</a>`
      } else if (href.includes("localhost") || href.includes("brawlre.github.io")) {
        return `<a href="${window.location.origin}/${href.replace(/https?:\/\/(?:localhost:\d{4}|brawlre\.github\.io)/g, "")}">${text}</a>`;
      }

      return false;
    }
  }

  marked.use({ renderer });

  const serializeHOTable = (htable :hotable): string => {
    const data = htable.getData();
      const headingData = htable.getSettings().nestedHeaders;
      const mergedCells = htable.getSettings().mergeCells;
      const columnData = htable.getSettings().columns;
      const optionData = Object.entries(Object.getPrototypeOf(htable.getSettings()));

      console.log(columnData);

      const modified: hotable.GridSettings = {};
      for (const [name, value] of optionData) {
          if (typeof value === "boolean" && value !== hotable.DefaultSettings[name]) modified[name] = value
      }
      delete modified.contextMenu;
      delete modified.manualColumnResize;

      let out = "```handsontable\n";
      out += "# OPTIONS\n"
      for (const [option, value] of Object.entries(modified)) {
        out += `${option}: ${value}\n`;
      }
      out += "# COLUMNS\n";

      const indexesTraversed = new Array(headingData.length).fill(0);
      const traverseTableHeadings = (layer: number, parentLength: number) => {
        let idx = indexesTraversed[layer];
        let currentTraversal = 0;
        while (idx < headingData[layer].length && !["string", "object"].includes(typeof headingData[layer][idx])) {
          idx++;
        }
        while (currentTraversal < parentLength && idx < headingData[layer].length) {
          if (typeof headingData[layer][idx] === "object") {
            out += `${"".padStart(layer * 2, " ")}${(headingData[layer][idx] as hotable.nestedHeaders.NestedHeader).label} [\n`
            traverseTableHeadings(layer + 1, (headingData[layer][idx] as hotable.nestedHeaders.NestedHeader).colspan)
            currentTraversal += (headingData[layer][idx] as hotable.nestedHeaders.NestedHeader).colspan;
          }
          else if (typeof headingData[layer][idx] === "string") {
            out += `${"".padStart(layer * 2, " ")}${headingData[layer][idx]}`;
            let currHeadingPos = 0;
            for (let i = 0; i < idx; i++) {
              currHeadingPos += (["undefined", "string"].includes(typeof headingData[layer][i])) ? 1 : headingData[layer][i].colspan;
            }
            if (Object.keys(columnData[currHeadingPos]).length > 0) {
              out += " {\n"
              for (const [key, val] of Object.entries(columnData[currentTraversal])) {
                out += `${"".padStart((layer + 1) * 2, " ")}${key}: ${val}\n`
              }
              out += `${"".padStart(layer * 2, " ")}}\n`;
            } else {
              out += "\n";
            }
            currentTraversal += 1;
          } else {
            currentTraversal += 1;
          }

          idx++;
        }
        if (layer !== 0) out += `${"".padStart((layer - 1) * 2, " ")}]\n`;
        indexesTraversed[layer] = idx;
      }
      traverseTableHeadings(0, headingData[0].reduce((acc, curr) => acc + ((["undefined", "string"].includes(typeof curr)) ? 1 : curr.colspan), 0));

      out += "# DATA\n";
      for (const merged of (mergedCells as hotable.mergeCells.Settings[])) {
        data[merged.row][merged.col] = `<$w${merged.colspan}h${merged.rowspan}>` + data[merged.row][merged.col];
      }

      for (let i = 0; i < data.length; i++) {
        data[i] = data[i].join("|").replace(/\r?\n/g, "\\n");
      }
      out += data.join("\n");
      out += "\n```";
      return out;
  }

  let markedHTMLOut = "";
  const updatePageContent = async (contentName: string) => {
    localStorage.setItem("lastPage", contentName);
    tables.length = 0;
    TOC.length = 0;
    if (window.location.hostname === "localhost")
      markedHTMLOut = marked((await (await fetch("./docs/" + contentName + ".md")).text()));
    else
      markedHTMLOut = marked((await (await fetch("https://raw.githubusercontent.com/BrawlRE/BrawlRE.github.io/main/docs/" + contentName + ".md")).text()));

    await tick();

    if (tables.length > 10) {
      for (const [idx, tableConfig] of tables.entries()) {
        const renderBtn = document.createElement("button");
        renderBtn.innerText = "show table";
        renderBtn.onclick = () => {
          const tableBaseEl = document.getElementById(`HOTable-${idx}`);
          tableBaseEl.innerHTML = "";
          const tableToggleButton = document.createElement("button");
          tableToggleButton.innerText = "hide table";
          const tableEditCopyButton = document.createElement("button");
          tableEditCopyButton.innerText = "edit table";
          const tableDisplayEl = document.createElement("div");
          tableToggleButton.onclick = () => {
            tableToggleButton.innerText = ((tableDisplayEl.style.display === "none") ? "hide" : "show") + " table";
            tableEditCopyButton.style.display = (tableDisplayEl.style.display === "none") ? "inline-block" : "none";
            tableDisplayEl.style.display = (tableDisplayEl.style.display === "none") ? "inline-block" : "none";
          }
          tableBaseEl.appendChild(tableToggleButton);
          tableBaseEl.appendChild(tableEditCopyButton);
          tableBaseEl.appendChild(tableDisplayEl);
          const htable = new hotable(tableDisplayEl, tableConfig);
          tableEditCopyButton.onclick = () => {
            htable.updateSettings({
              readOnly: false,
              contextMenu: true,
              allowInsertColumn: true,
              allowInsertRow: true,
            })
            tableEditCopyButton.innerText = "copy as markdown"
            tableEditCopyButton.onclick = () => {
              copyToClipboard(serializeHOTable(htable));
            }
          }
        }
        document.getElementById(`HOTable-${idx}`).appendChild(renderBtn);
      }
    } else {
      for (const [idx, tableConfig] of tables.entries()) {
        const tableBaseEl = document.getElementById(`HOTable-${idx}`);
        const tableToggleButton = document.createElement("button");
        tableToggleButton.innerText = "hide table";
        const tableEditCopyButton = document.createElement("button");
          tableEditCopyButton.innerText = "edit table";
        const tableDisplayEl = document.createElement("div");
        tableToggleButton.onclick = () => {
          tableToggleButton.innerText = ((tableDisplayEl.style.display === "none") ? "hide" : "show") + " table";
          tableEditCopyButton.style.display = (tableDisplayEl.style.display === "none") ? "inline-block" : "none";
          tableDisplayEl.style.display = (tableDisplayEl.style.display === "none") ? "inline-block" : "none";
        }

        tableBaseEl.appendChild(tableToggleButton);
        tableBaseEl.appendChild(tableEditCopyButton);
        tableBaseEl.appendChild(tableDisplayEl);
        const htable = new hotable(tableDisplayEl, tableConfig);
        tableEditCopyButton.onclick = () => {
          htable.updateSettings({
            readOnly: false,
            contextMenu: true,
            allowInsertColumn: true,
            allowInsertRow: true,
          })
          tableEditCopyButton.innerText = "copy as markdown"
          tableEditCopyButton.onclick = () => {
            copyToClipboard(serializeHOTable(htable));
          }
        }
      }
    }

    for (const heading of document.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
      heading.addEventListener("click", () => {
        copyToClipboard(`${window.location.origin}?page=${contentName}&location=${heading.id}`);
      })
    }
  }
  (async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const linkedPage = urlParams.get('page');
    const linkedLocation = urlParams.get('location');
    await updatePageContent(linkedPage || localStorage.getItem("lastPage") || "index.md");
    // @ts-ignore
    if (linkedLocation) document.getElementById(new marked.Slugger().slug(linkedLocation, {dryrun: true})).scrollIntoView();
  })();


  // incredibly basic implementation - easy to break BUT ALSO very intuitive to use
  let pages = [];
  (async () => {
    const indentSize = 2;

    const pageDataLines = (await (await fetch("./docs/_pages.txt")).text()).replace(/\r/g, "").split("\n");
    const pathStack = [];
    let lastIndentLevel = 0;
    for (const line of pageDataLines) {
      const thisIndentLevel = line.search(/\S/);
      if (thisIndentLevel < lastIndentLevel) {
        const levels = (lastIndentLevel - thisIndentLevel) / indentSize;
        for (let i = 0; i < levels; i++) pathStack.pop();
        lastIndentLevel = thisIndentLevel;
      } else {
        lastIndentLevel = thisIndentLevel;
      }

      pages = [...pages, pathStack.join('') + line.trim()]

      if (line.endsWith("/")) {
        pathStack.push(line.trim());
        lastIndentLevel += 2;
      }
    }
  })();
</script>

<!-- svelte-ignore a11y-no-onchange -->


<main>
  <div class="sidebar">
    <div class="list">
      {#each pages as page}
        {#if page.endsWith("/")}
        <div
          class="nav-dir-header"
          style="margin-left: {(page.split('/').length - 2) * 10}px"
        >
          <span>{page.split("/")[page.split("/").length - 2] + "/"}</span>
        </div>
        {:else}
          <div
            class="nav-link"
            on:click={() => updatePageContent(page)}
            style="margin-left: {(page.split('/').length - 1) * 10}px"
          >
            {page.split("/")[page.split("/").length - 1]}
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="content">
      {@html markedHTMLOut}
  </div>
  <div class="TOC">
    <ul>
      {#each TOC as header}
        <li style="margin-left: {(header.level - 1) * 10}px"><a href="#{header.id}">{header.text}</a></li>
      {/each}
    </ul>
  </div>
</main>

<style>
main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

main > .sidebar {
  width: 250px;
  height: 100vh;
  box-shadow: inset -2px 0 2px #0004;
  flex-shrink: 0;
  overflow-y: scroll;
}

main > .sidebar::-webkit-scrollbar {
  display: none;
}

main > .sidebar > .list {
  width: 100%;
  padding: 20px;
  font-size: 16px;
}

.list > .nav-dir-header {
  font-weight: bold;
  margin-bottom: 5px;
}
.list > .nav-link:hover {
  background-color: #0001;
  cursor: pointer;
}

main > .content {
  min-width: 500px;
  height: 100vh;
  padding: 10px 20px;
  overflow-y: scroll;
  overflow-x: scroll;
  flex-grow: 1;
}

main > .content::-webkit-scrollbar {
  display: none;
}

:global(.wtHider) {
  /* idk why but it breaks without this extremly hacky solution :( */
  height: initial !important;
}

main > .TOC > ul {
  box-shadow: inset 2px 0 2px #0004;

  padding: 20px;
  margin: 0;
  width: 200px;
  list-style: none;
  height: 100vh;
  overflow-y: scroll;

  flex-shrink: 0;
}

main > .TOC > ul > li {
  margin: 0;
}

:global(h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover) {
  cursor: pointer;
  text-shadow: 0 1px 3px #0004;
}

:global(h1:hover::before, h2:hover::before, h3:hover::before, h4:hover::before, h5:hover::before, h6:hover::before) {
  content: "🔗";
  display: inline;
  /* position: inline; */
  /* right: 100%;
  margin: auto; */
}

@media only screen and (max-width: 1000px) {
  main > .sidebar {
    display: none;
  }

  main > .TOC {
    display: none;
  }
}
</style>