"use strict";

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function getSelectedText() {
  return window.getSelection().toString();
}

function isDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function scrollToTop(element = window) {
  element === window
    ? window.scroll({ top: 0, behavior: "smooth" })
    : element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToBottom(element = window) {
  element === window
    ? window.scroll({ top: document.body.scrollHeight, behavior: "smooth" })
    : element.scrollIntoView({ behavior: "smooth", block: "end" });
}

function hideElement(element, removeFromFlow = false) {
  removeFromFlow
    ? (element.style.display = "none")
    : (element.style.visibility = "hidden");
}

export {
  copyToClipboard,
  getSelectedText,
  isDarkMode,
  scrollToTop,
  scrollToBottom,
  hideElement,
};
