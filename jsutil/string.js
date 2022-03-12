"use strict";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(str) {
  let retStr = str.replace(/&/g, "&amp;");
  retStr = retStr.replace(/>/g, "&gt;");
  retStr = retStr.replace(/</g, "&lt;");
  retStr = retStr.replace(/"/g, "&quot;");
  retStr = retStr.replace(/'/g, "&#x27;");
  retStr = retStr.replace(/`/g, "&#x60;");
  return retStr;
}

export { capitalize, escapeHtml };
