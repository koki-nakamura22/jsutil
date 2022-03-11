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

function scrollToTop(element) {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToBottom(element) {
  element.scrollIntoView({ behavior: "smooth", block: "end" });
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
