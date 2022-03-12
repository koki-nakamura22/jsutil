function generateRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}

function isValidColorCode(colorCode) {
  return /^#[0-9A-Fa-f]{6}$/.test(colorCode);
}

export { generateRandomHexColor, isValidColorCode };
