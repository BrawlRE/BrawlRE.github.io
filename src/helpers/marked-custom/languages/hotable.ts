import Handsontable from "handsontable";
import type { codeBlockArgs } from "../base";

export const hotLanguageHandler = (tables, {code, language}: codeBlockArgs): string => {
  const HOTConfig: Handsontable.GridSettings = {
    nestedHeaders: [[]],
    data: [],
    columns: [],
    manualColumnResize: true,
    licenseKey: "non-commercial-and-evaluation",
    mergeCells: [],
    height: 'auto',
    readOnly: true,
    modifyColWidth: (width, col) => {
      if (width > 300) {
        return 300
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
        // @ts-ignore
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
        for (const [col, d] of rowData.entries()) {
          const reg = /^<\$(?:w(?<width>\d+))?\s?(?:h(?<height>\d+))?\s?(?:s"(?<styling>.+?)")?\>/gm;
          const results = reg.exec(d);
          if (!results) continue;
          if (results.groups.height || results.groups.width) {
            const cellHeight = parseInt(results.groups.height) || 1;
            const cellWidth = parseInt(results.groups.width) || 1;
            const row = HOTConfig.data.length;
            (HOTConfig.mergeCells as Handsontable.mergeCells.Settings[]).push({
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

  const outHTML = `<div id="HOTable-${tables.length}"></div>`;
  tables.push(HOTConfig);
  return outHTML;
}

export const hotLanguageSerialize = (htable: Handsontable): string => {
  const data = htable.getData();

    const headingData = htable.getSettings().nestedHeaders;
    const mergedCells = htable.getPlugin("mergeCells").mergedCellsCollection.mergedCells;
    const columnData = htable.getSettings().columns;
    const optionData = Object.entries(Object.getPrototypeOf(htable.getSettings()));

    const modified: Handsontable.GridSettings = {};
    for (const [name, value] of optionData) {
        if (typeof value === "boolean" && value !== Handsontable.DefaultSettings[name]) modified[name] = value
    }
    delete modified.contextMenu;
    delete modified.manualColumnResize;

    console.log(mergedCells);

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
          out += `${"".padStart(layer * 2, " ")}${(headingData[layer][idx] as Handsontable.nestedHeaders.NestedHeader).label} [\n`
          traverseTableHeadings(layer + 1, (headingData[layer][idx] as Handsontable.nestedHeaders.NestedHeader).colspan)
          currentTraversal += (headingData[layer][idx] as Handsontable.nestedHeaders.NestedHeader).colspan;
        }
        else if (typeof headingData[layer][idx] === "string") {
          out += `${"".padStart(layer * 2, " ")}${headingData[layer][idx]}`;
          let currHeadingPos = 0;
          for (let i = 0; i < idx; i++) {
            // @ts-ignore
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
    // @ts-ignore
    traverseTableHeadings(0, headingData[0].reduce((acc, curr) => acc + ((["undefined", "string"].includes(typeof curr)) ? 1 : curr.colspan), 0));

    out += "# DATA\n";
    console.log(data);
    console.log(mergedCells);
    for (const merged of (mergedCells as Handsontable.mergeCells.Settings[])) {
      data[merged.row][merged.col] = `<$w${merged.colspan}h${merged.rowspan}>` + data[merged.row][merged.col];
    }

    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].join("|").replace(/\r?\n/g, "\\n");
    }
    out += data.join("\n");
    out += "\n```";
    return out;
}