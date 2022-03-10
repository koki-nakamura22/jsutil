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

export { copyToClipboard, getSelectedText, isDarkMode };
