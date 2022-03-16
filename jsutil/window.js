"use strict";

/** window */

/**
 * Copy the text to clipboard.
 * @param {String} text 
 */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

/**
 * Get the selected text.
 * @returns {String} The selected text.
 */
function getSelectedText() {
  return window.getSelection().toString();
}

/**
 * Check if the browser is working with the dark mode or not.
 * @returns {Boolean} True: Darkmode. / False: Not darkmode.
 */
function isDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

/**
 * Scroll to the top.
 * @param {Object} element HTMLElement or Window
 */
function scrollToTop(element = window) {
  element === window
    ? window.scroll({ top: 0, behavior: "smooth" })
    : element.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Scroll to the bottom.
 * @param {Object} element HTMLElement or Window
 */
function scrollToBottom(element = window) {
  element === window
    ? window.scroll({ top: document.body.scrollHeight, behavior: "smooth" })
    : element.scrollIntoView({ behavior: "smooth", block: "end" });
}

/**
 * Hide the element.
 * @param {HTMLElement} element 
 * @param {Boolean} removeFromFlow 
 */
function hideElement(element, removeFromFlow = false) {
  removeFromFlow
    ? (element.style.display = "none")
    : (element.style.visibility = "hidden");
}

// https://ja.stackoverflow.com/questions/4339/%E5%A4%89%E6%95%B0%E3%81%8Cdom%E8%A6%81%E7%B4%A0%E3%81%8B%E3%81%A9%E3%81%86%E3%81%8B%E3%82%92%E5%88%A4%E5%AE%9A%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95
/**
 * Check if the obj is Node object or not.
 * @param {Object} obj 
 * @returns {Boolean} True: Node object. / False: Not node object.
 */
function isNode(obj) {
  return typeof Node === "object"
    ? obj instanceof Node
    : obj &&
        typeof obj === "object" &&
        typeof obj.nodeType === "number" &&
        typeof obj.nodeName === "string";
}

// https://ja.stackoverflow.com/questions/4339/%E5%A4%89%E6%95%B0%E3%81%8Cdom%E8%A6%81%E7%B4%A0%E3%81%8B%E3%81%A9%E3%81%86%E3%81%8B%E3%82%92%E5%88%A4%E5%AE%9A%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95
/**
 * Check if the obj is HTMLElement object or not.
 * @param {Object} obj 
 * @returns {Boolean} True: HTMLElement object. / False: Not HTMLElement object.
 */
function isElement(obj) {
  return typeof HTMLElement === "object"
    ? obj instanceof HTMLElement
    : obj &&
        typeof obj === "object" &&
        obj !== null &&
        obj.nodeType === 1 &&
        typeof obj.nodeName === "string";
}

/**
 * Check if the obj is jQuery object or not.
 * @param {Object} obj 
 * @returns {Boolean} True: jQuery object. / False: Not jQuery object.
 */
function isjQueryObject(obj) {
  return obj instanceof jQuery;
}

export {
  copyToClipboard,
  getSelectedText,
  isDarkMode,
  scrollToTop,
  scrollToBottom,
  hideElement,
  isElement,
  isNode,
  isjQueryObject,
};
