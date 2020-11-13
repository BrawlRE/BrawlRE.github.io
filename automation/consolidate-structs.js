const fs = require("fs");

const getStructFiles = (out, rootPath, isWithinStructs, structRoot) => {
  const paths = fs.readdirSync(rootPath);
  for (const path of paths) {
    const currPath = `${rootPath}/${path}`;
    if (fs.lstatSync(currPath).isDirectory()) {
      if (isWithinStructs) {
        getStructFiles(out, currPath, true, structRoot);
      } else if (path.toLowerCase() === "structs") {
        out[currPath] = [];
        getStructFiles(out, currPath, true, currPath);
      } else {
        getStructFiles(out, currPath, false);
      }
    } else {
      if (isWithinStructs && path.endsWith(".md")) {
        out[structRoot].push(currPath);
      }
    }
  }
}

const typeSizeMap = (type) => {
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

const calcStructSizes = (structText, structName, structs, out) => {
  let currOffset = 0;
  for (const line of structText.split("\n").map(l => l.trim())) {
    if (line.startsWith("$$") || line.startsWith("//")) continue;
    if (line.startsWith("$")) {
      const newOffset = parseInt(line.substring(1), 16);
      currOffset = newOffset;
      continue;
    }
    const fnReg = /(?<returnType>(?:unsigned\s|signed\s)?\w+\*?)\s(?<fnName>\w+)\((?<args>.+)\)/g;
    const fnResults = fnReg.exec(line);
    if (fnResults) continue;

    const propReg = /(?<type>(?:unsigned\s|signed\s)?\w+\*?)\s(?<name>\w+)(?:\[(?<count>\d+)\])?/g;
    const propResults = propReg.exec(line);
    if (propResults) {
      const type = propResults.groups.type;
      const count = parseInt(propResults.groups.count) || 1;
      if (propResults.groups.count) currItem.length = count;
      let typeSize = typeSizeMap(propResults.groups.type) || ((out[type]) ? out[type].size : undefined);
      if (!typeSize) {
        calcStructSizes(structs[type], type, structs, out);
        ((out[type]) ? out[type].size : undefined) || 0;
      }
      const difference = typeSize * count;
      currOffset += difference;
    }
  }
  out[structName].size = currOffset;
}

(() => {
  const structRoots = {};
  getStructFiles(structRoots, `${__dirname}/../public/docs`, false, undefined);

  for (const [structRoot, filePaths] of Object.entries(structRoots)) {
    let out = {};
    let structs = {};
    for (const path of filePaths) {
      const content = fs.readFileSync(path, "utf8").replace(/\r/g, "");
      const re = /```struct\n(?<name>\w+)\s{\n(?<whole>(?:.(?!```))+)/gms;
      let match;
      while ((match = re.exec(content)) !== null) {
        structs[match.groups.name] = match.groups.whole;
        out[match.groups.name] = {path: path.substring(path.indexOf("/docs") + 5, path.length - 3)};
      }
    }

    for (const [struct, content] of Object.entries(structs)) {
      if (out[struct].size) continue;
      calcStructSizes(content, struct, structs, out);
    }

    fs.writeFileSync(`${structRoot}/_consolidated.json`, JSON.stringify(out), "utf8");
  }
})();