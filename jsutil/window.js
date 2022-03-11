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

export {
  copyToClipboard,
  getSelectedText,
  isDarkMode,
  scrollToTop,
  scrollToBottom,
};
