"use strict";

/** @module string */

/**
 * Capitalize the string.
 * @param {String} str
 * @returns {String} Capitalized string.
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate the random string.
 * @returns Generated string.
 */
function generateRandomString() {
  return Math.random().toString(36).slice(2);
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

export { capitalize, generateRandomString, escapeHtml };
