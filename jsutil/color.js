"use strict";

function generateRandomHexColorCode() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}

function isValidColorCode(colorCode) {
  return /^#[0-9A-Fa-f]{6}$/.test(colorCode);
}

export { generateRandomHexColorCode, isValidColorCode };
