import Handsontable from "handsontable";

export const registerHexRenderers = () => {
  Handsontable.renderers.registerRenderer("hex", (instance, td, row, col, prop, value, cellProperties) => {
    td.style.fontFamily = "monospace";
    td.style.fontWeight = "bold";
    td.style.textAlign = "center";
    if (typeof value === "string") {
      if (value.length > 0)
        td.innerText = "0x" + (value.startsWith("0x") ? parseInt(value, 16) : parseInt(value)).toString(16).toUpperCase();
      else
        td.innerText = "-";
    } else if (typeof value === "number") {
      td.innerText = "0x" + value.toString(16).toUpperCase();
    } else {
      td.innerText = "NaN"
    }
    if (cellProperties.readOnly) {
      td.className = "htDimmed";
    }
    return td;
  })
}