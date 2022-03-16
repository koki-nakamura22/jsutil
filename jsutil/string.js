"use strict";

/** @module string */

/**
 * Capitalize the strings.
 * @param {String} str 
 * @returns {String} Capitalized strings.
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Escape the HTML code.
 * @param {String} str HTML Code.
 * @returns {String} Escaped HTML Code.
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/>/g, "&gt;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/`/g, "&#x60;");
}

export { capitalize, escapeHtml };
