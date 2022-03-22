"use strict";

/** @module function */

function extractFunctionParameters(func) {
  const funcStr = func
    .toString()
    .replace(/\/\*[\s\S]*?\*\//g, "") // Remove comments of the form /* ... */
    .replace(/\/\/(.)*/g, "") // Removing comments of the form //
    .replace(/{[\s\S]*}/, "") // Remove body of the function { ... }
    .replace(/=>/g, "") // removing '=>' if func is arrow function
    .trim();

  // Start parameter names after first '('
  const start = funcStr.indexOf("(") + 1;

  // End parameter names is just before last ')'
  const end = funcStr.length - 1;

  const result = funcStr.substring(start, end).split(", ");

  let params = [];
  result.forEach((element) => {
    // Removing any default value
    element = element.replace(/=[\s\S]*/g, "").trim();
    if (element.length > 0) params.push(element);
  });
  return params;
}

export { extractFunctionParameters };
