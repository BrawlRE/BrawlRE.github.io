import Handsontable from "handsontable";
import { currentPath } from "../../../stores/locationStore";
import { typeData, typeList, currStructPath } from "../../../stores/typeDataStore";
import type { codeBlockArgs } from "../base";

export type structTableData = Array<{
  name: string;
  properties: Handsontable.GridSettings;
  functions: Handsontable.GridSettings;
}>;

let currentTypeList = [];
let currentTypeData = {};
let currentStructPath = '';

typeList.subscribe((list) => {
  currentTypeList = list;
})

typeData.subscribe((data) => {
  currentTypeData = data[currentStructPath];
})

currStructPath.subscribe((path) => {
  currentStructPath = path;
})

Handsontable.renderers.registerRenderer("type", (instance, td, row, col, prop, value, cellProperties) => {
  td.style.fontFamily = "monospace";
  if (typeof value === "string" && cellProperties.readOnly) {
    const link = (value.endsWith("*")) ? value.substring(0, value.length - 1) : value;
    td.innerHTML = '';

    if (currentTypeData[link]) {
      const content = document.createElement("span");
      content.onclick = () => currentPath.set(currentTypeData[link].path.substring(1));
      content.className = "link";
      content.innerText = value;

      td.appendChild(content);
    } else {
      const content = document.createElement("span");
      content.innerText = value;

      td.appendChild(content);
    }
  }

  if (cellProperties.readOnly) {
    td.classList.add("htDimmed");
  }

  return td;
})

const typeSizeMap = (type: string) => {
  // NOTE:
  // pointer size not always accurate in all cases,
  // but is accurate as far as dolphin.
  //
  // For more info:
  // http://en.wikipedia.org/wiki/Intel_Memory_Model#Pointer_sizes
  if (type.endsWith("*")) return 4;
  if (type.startsWith("unsigned") || type.startsWith("signed"))
    { type = type.substring(type.indexOf(" ")); }
  else if (type.startsWith("u") || type.startsWith("i"))
    { type = type.substring(1); }

  switch (type) {
    case 'bool':
      return 1;

    case 'char':
    case '8':
      return 1;

    case 'short':
    case 'short int':
    case '16':
      return 2;

    case 'int':
    case '32':
      return 4

    case 'long':
    case 'long int':
    case '64':
      return 8;

    case 'long long':
    case 'long long int':
    case '128':
      return 16;

    case 'float':
    case 'f32':
      return 4;

    case 'double':
    case 'f64':
      return 8;

    case 'long double':
      return 12;

    default:
      return undefined;
  }
}

export const structHandler = (data: structTableData, getCurrentData: () => string, {code, language}: codeBlockArgs): boolean | string => {
  const structConfig: Handsontable.GridSettings = {
    nestedHeaders: [
      ["offset",{colspan: 1, label: "type"},"length","name","comments"],
    ],
    data: [],
    columns: [
      {renderer: "hex"},
      {
        renderer: "type",
        type: "autocomplete",
        source: currentTypeList,
        strict: false
      },
      {},
      {},
      {}
    ],
    mergeCells: [],
    manualColumnResize: true,
    licenseKey: "non-commercial-and-evaluation",
    height: 'auto',
    readOnly: true,
    modifyColWidth: (width, col) => {
      if (width > 300) {
        return 300
      }
      return width;
    }
  };

  const fnConfig: Handsontable.GridSettings = {
    colHeaders: ["offset","type","name","comments"],
    data: [],
    columns: [
      {renderer: "hex"},
      {
        renderer: "type",
        type: "autocomplete",
        source: currentTypeList,
        strict: false
      },
      {},
      {}
    ],
    manualColumnResize: true,
    licenseKey: "non-commercial-and-evaluation",
    height: 'auto',
    readOnly: true,
    modifyColWidth: (width, col) => {
      if (width > 300) {
        return 300
      }
      return width;
    }
  }

  const functions: typeof currItem[] = [];
  const properties: typeof currItem[] = [];
  let name = '';
  let currItem: {
    name?: string;
    offset?: string;
    comments: string;
    offsetType: "rel" | "abs";
    length?: number;
    type?: string;
    return?: {
      type?: string;
      comments?: string;
    };
    arguments?: {
      [name: string]: {
        type?: string;
        comments?: string;
      }
    };
  } = {offsetType: "rel", comments: '', offset: '0x00000000'};
  let currOffset: number = 0;
  let currParamToComment: string = '';
  for (const line of code.replace(/\r/g, "").split("\n").map(l => l.trim())) {
    if (line.endsWith("{")) { name = line.substring(0, line.length - 1); continue; }
    if (line.startsWith("$$")) {
      currItem.offset = `0x${line.substring(2)}`;
      currItem.offsetType = "abs";
      continue;
    }
    if (line.startsWith("$")) {
      const newOffset = parseInt(line.substring(1), 16);

      properties.push({
        name: "_spacer",
        offsetType: "rel",
        offset: `0x${currOffset.toString(16).padStart(8, '0')}`,
        comments: '',
        type: "char",
        length: newOffset - currOffset
      });

      currItem.offset = `0x${newOffset.toString(16).padStart(8, '0')}`;

      currOffset = newOffset;
      continue;
    }
    if (line.startsWith("//")) {
      const comment = line.substring(2).trim();
      if (comment.startsWith("@param")) {
        const parts = /@param\s(?<varName>\w+)\s(?<comment>.+)/g.exec(comment);
        if (!currItem.arguments) currItem.arguments = {};
        currParamToComment = parts.groups.varName;
        if (!currItem.arguments[currParamToComment]) currItem.arguments[currParamToComment] = {comments: ''};
        if (!currItem.arguments[currParamToComment].comments) currItem.arguments[currParamToComment].comments = '';
        if (parts.groups.comment) currItem.arguments[currParamToComment].comments += parts.groups.comment;
      } else if (comment.startsWith("@return")) {
        currParamToComment = "@return";
        if (!currItem.return) currItem.return = {};
        if (!currItem.return.comments) currItem.return = {comments: ''};
        currItem.return.comments += comment.substring(8);
      }
      else {
        if (!currItem.return) currItem.return = {comments: ''};
        if (currParamToComment === "@return") currItem.return.comments += ` ${comment}`;
        else if (currParamToComment.length) currItem.arguments[currParamToComment].comments += ` ${comment}`;
        else currItem.comments += ` ${comment}`;
      }
      continue;
    }

    const fnReg = /(?<returnType>(?:unsigned\s|signed\s)?\w+\*?)\s(?<fnName>\w+)\((?<args>.+)\)/g;
    const fnResults = fnReg.exec(line);
    if (fnResults) {
      if (!currItem.arguments) currItem.arguments = {};
      if (!currItem.return) currItem.return = {};
      currItem.return.type = fnResults.groups.returnType;
      currItem.name = fnResults.groups.fnName;
      const argReg = /(?<typing>(?:unsigned\s|signed\s)?\w+\*?)\s(?<argName>\w+)/g;
      let currMatch: RegExpMatchArray;
      while((currMatch = argReg.exec(fnResults.groups.args)) !== null) {
        if (!currItem.arguments[currMatch.groups.argName]) currItem.arguments[currMatch.groups.argName] = {};
        currItem.arguments[currMatch.groups.argName].type = currMatch.groups.typing;
      }
      functions.push(currItem);
      currParamToComment = '';
      currItem = {comments: '', offsetType: "rel", offset: `0x${currOffset.toString(16).padStart(8, '0')}`};
    }

    const propReg = /(?<type>(?:unsigned\s|signed\s)?\w+\*?)\s(?<name>\w+)(?:\[(?<count>\d+)\])?/g;
    const propResults = propReg.exec(line);
    if (propResults) {
      currItem.name = propResults.groups.name;
      currItem.type = propResults.groups.type;
      const count = parseInt(propResults.groups.count) || 1;
      if (propResults.groups.count) currItem.length = count;
      console.log(currItem.name, currentTypeData);
      const difference = (typeSizeMap(currItem.type) || currentTypeData[currItem.type]?.size || 0) * count;
      if (difference !== 0) {
        properties.push(currItem);
        currOffset += difference;
      }
      currParamToComment = '';
      currItem = {comments: '', offsetType: "rel", offset: `0x${currOffset.toString(16).padStart(8, '0')}`};
    }
  }

  for (const [i, prop] of properties.entries()) {
    structConfig.data.push([
      prop.offset,
      prop.type,
      prop.length || '',
      prop.name,
      prop.comments
    ]);
    // if (prop.length === undefined) {
    //   (structConfig.mergeCells as any[]).push({
    //     row: i,
    //     col: 1,
    //     rowspan: 1,
    //     colspan: 2
    //   })
    // }
  }

  for (const fn of functions) {
    fnConfig.data.push([
      fn.offset, fn.return.type, fn.name, fn.comments
    ])
    if (fn.arguments) {
      for (const [name, data] of Object.entries(fn.arguments)) {
        fnConfig.data.push([
          '', data.type, name, data.comments
        ])
      }
    }
    if (fn.return) {
      fnConfig.data.push([
        '', fn.return.type, "@return", fn.return.comments
      ])
    }
  }

  if (functions.length === 0) fnConfig.data.push(['','','','']);

  const outHTML = `<div id="structTable-${data.length}"></div>`;
  data.push({
    name,
    properties: structConfig,
    functions: fnConfig
  });
  return outHTML;
}