<script lang="ts">
  // svelte imports
  import { tick } from 'svelte';
  // other library imports
  import marked from 'marked';
  // helper imports
  import { rendererFactory } from './helpers/marked-custom/base';
  import { copyToClipboard } from './helpers/CopyToClipboard';
  import { registerHexRenderers } from './Tables/renderers/hex';
  import { hostRootAddr } from './helpers/hostRoot';
  // store imports
  import { currStructPath } from './stores/typeDataStore';
  // component imports
  import PageNav from './components/PageNav.svelte';
  import StandardTable from './Tables/standard/StandardTable.svelte';
import { currentPath } from './stores/locationStore';
import StructTable from './Tables/standard/StructTable.svelte';

  registerHexRenderers();

  const tables = [];
  const structData = [];
  let TOC = [];
  let TOCIsActive = false;
  let sidebarIsActive = false;
  let lastPage = localStorage.getItem("lastPage");
  let pages = [];
  let pageScripts = [];

  const getStructData = () => {
    return localStorage.getItem("structs");
  }

  marked.use({
    renderer: rendererFactory({
      hotLang: tables,
      struct: {
        getCurrentData: getStructData,
        tableData: structData
      }
    }, TOC, pages, pageScripts)
  });

  let markedHTMLOut = "";
  const updatePageContent = async () => {
    localStorage.setItem("lastPage", $currentPath);
    lastPage = $currentPath;
    tables.length = 0;
    structData.length = 0;
    TOC.length = 0;
    markedHTMLOut = marked((await (await fetch(`${hostRootAddr}${$currentPath}.md`)).text()));
    TOC = TOC;

    for (const src of pageScripts) {
      console.log(src);
      eval(await (await fetch(src)).text());
    }

    pageScripts = [];

    await tick();

    for (const [idx, tableConfig] of tables.entries()) {
      new StandardTable({
        target: document.getElementById(`HOTable-${idx}`),
        props: {
          tableData: tableConfig,
          hidden: tables.length > 10
        }
      })
    }

    console.log(structData);

    for (const [idx, {name, properties, functions}] of structData.entries()) {
      console.log(document.getElementById(`structTable-${idx}`));
      new StructTable({
        target: document.getElementById(`structTable-${idx}`),
        props: {
          name,
          structData: properties,
          fnData: functions,
          hidden: true
        }
      })
    }

    for (const [idx, structConfig] of structData.entries()) {
      console.log(idx, structConfig);
    }

    const titleHeader = document.createElement("h6");
    titleHeader.innerText = $currentPath.replace(/\//g, " > ");
    document.getElementById("content").prepend(titleHeader);

    for (const heading of document.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
      heading.classList.add("page-link");
      heading.addEventListener("click", () => {
        copyToClipboard(`${window.location.origin}${window.location.pathname}?page=${$currentPath}&location=${heading.id}`);
      })
    }
  }

  // incredibly basic implementation - easy to break BUT ALSO very intuitive to use
  let pageDirStructure = {label: "_root", children: [], collapsed: false};
  (async () => {
    const indentSize = 2;

    let pageDataLines: string[];
    pageDataLines = (await (await fetch(`${hostRootAddr}_pages.txt`)).text()).replace(/\r/g, "").split("\n");
    const pathStack = [];
    const pathDirStack: Array<typeof pageDirStructure> = [pageDirStructure];
    let lastIndentLevel = 0;
    for (const line of pageDataLines) {
      if (line.trim().startsWith("? ") || line.length === 0) continue;

      const thisIndentLevel = line.search(/\S/);
      if (thisIndentLevel < lastIndentLevel) {
        const levels = (lastIndentLevel - thisIndentLevel) / indentSize;
        for (let i = 0; i < levels; i++) pathStack.pop();
        pathDirStack.length = pathStack.length + 1;
        lastIndentLevel = thisIndentLevel;
      } else {
        lastIndentLevel = thisIndentLevel;
      }

      let lineData = line.trim();

      if (lineData.startsWith("?c")) {
        lineData = lineData.substring(2).trim();
        if (lineData.endsWith("/")) {
          pages.push(pathStack.join('') + lineData);
          pathStack.push(lineData);
          pathDirStack[pathDirStack.length - 1].children.push({label: lineData, children: [], collapsed: true});
          pathDirStack.push(pathDirStack[pathDirStack.length - 1].children.slice(-1)[0]);
          lastIndentLevel += 2;
          continue;
        }
      }
      pages.push(pathStack.join('') + lineData);

      if (line.endsWith("/")) {
        pathStack.push(lineData);
        pathDirStack[pathDirStack.length - 1].children.push({label: lineData, children: []});
        pathDirStack.push(pathDirStack[pathDirStack.length - 1].children.slice(-1)[0]);
        lastIndentLevel += 2;
      } else {
        pathDirStack[pathDirStack.length - 1].children.push(lineData);
      }
    }

    // svelte will update because I said so
    // pages = pages;
    pageDirStructure = pageDirStructure;

    const urlParams = new URLSearchParams(window.location.search);
    const linkedPage = urlParams.get('page');
    const linkedLocation = urlParams.get('location');
    $currentPath = linkedPage || localStorage.getItem("lastPage") || "index";
    await tick();
    if (linkedLocation) {
      // @ts-ignore
      const targetHeading = document.getElementById(new marked.Slugger().slug(linkedLocation, {dryrun: true}));
      targetHeading.scrollIntoView();
    }
  })();

  $: {
    $currentPath,
    updatePageContent();
  }

</script>

<header>
  <button class="sidebarButton" on:click={() => sidebarIsActive = true}> pages </button>
  <button class="navButton" on:click={() => TOCIsActive = true}> content </button>
</header>
<div class="offToggle {sidebarIsActive || TOCIsActive ? 'active' : ''}" on:click={() => {TOCIsActive = false; sidebarIsActive = false;}}></div>

<main>
  <div class="sidebar {sidebarIsActive ? 'active' : ''}">
    <div class="list">
      <PageNav {pageDirStructure} clickEvt={(s) => { $currentPath = s }} {lastPage} />
    </div>
  </div>
  <div class="content" id="content">
      {@html markedHTMLOut}
  </div>
  <div class="TOC {TOCIsActive ? 'active' : ''}">
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
  background-color: #FFF;
  flex-shrink: 0;
  overflow-y: scroll;
  padding-left: 10px;
  padding-top: 10px;
}

/* main > .sidebar::-webkit-scrollbar {
  display: none;
} */

main > .sidebar > .list {
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: #FFF;
}

main > .content {
  height: 100vh;
  padding: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-grow: 1;
}

/* main > .content::-webkit-scrollbar {
  display: none;
} */

:global(.wtHider) {
  /* idk why but it breaks without this extremly hacky solution :( */
  height: initial !important;
}

:global(.invalid-link) {
  color: #F00;
  display: inline-block;
  position: relative;
}
:global(.invalid-link::after) {
  content: attr(data-targetpage);
  opacity: 0;
  background-color: black;
  color: white;
  display: block;
  position: absolute;
  pointer-events: none;
  top: 0;
  height: 20px;
  padding: 2px;
  border-radius: 2px;
  transition: all .3s cubic-bezier(0.19, 1, 0.22, 1);
}
:global(.invalid-link:hover) {
  text-decoration: underline;
}
:global(.invalid-link:hover::after) {
  top: -25px;
  opacity: 1;
  transition: all .3s cubic-bezier(0.19, 1, 0.22, 1);
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

:global(.page-link:hover) {
  cursor: pointer;
  text-shadow: 0 1px 3px #0004;
}

:global(.page-link:hover::before) {
  content: "🔗";
  display: inline;
  /* position: inline; */
  /* right: 100%;
  margin: auto; */
}

header {
  display: none;
}

@media only screen and (max-width: 1000px) {
  main > .sidebar {
    display: block;
    position: fixed;
    top: 0;
    width: 250px;
    left: -250px;
    z-index: 1002;
    transition: left .3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  main > .sidebar.active {
    left: 0px;
    transition: left .3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  main > .TOC {
    display: block;
    position: fixed;
    background-color: #FFF;
    top: 0;
    width: 250px;
    right: -250px;
    z-index: 1002;
    transition: right .3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  main > .TOC.active {
    right: 0px;
    transition: right .3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .offToggle {
    position: fixed;
    pointer-events: none;
    background-color: #0000;
    width: 100vw;
    height: 100vh;
    z-index: 1001;
    transition: background-color .3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .offToggle.active {
    background-color: #0003;
    pointer-events: auto;
    transition: background-color .3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  /* kinda hacky but it works ahahah */
  header {
    display: block;
    position: fixed;
    height: 65px;
    padding: 20px;
    top: 0;
    width: 100vw;
    background-color: #FFF;
    box-shadow: 0 1px 3px #0004;
    z-index: 1000
  }

  header > .sidebarButton {
    float: left;
  }



  header > .navButton {
    float: right;
  }

  /* main > .content {
    margin-top: 65px;
    height: calc(100vh - 65px);
  } */

  main {
    position: absolute;
    top: 65px;
    height: calc(100vh - 65px);
  }

  :global(.htDimmed) {
    pointer-events: none;
  }
}
</style>