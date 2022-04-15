"use strict";

/** @module color */

/**
 * Generate the random hex color code.
 * @returns {String} Generated hex color code.
 */
function generateRandomHexColorCode() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}

/**
 * Check if the color code is valid or invalid.
 * @param {String} colorCode
 * @returns {Boolean} True: Valid. / False: Invalid.
 */
function isValidColorCode(colorCode) {
  return /^#[0-9A-Fa-f]{6}$/.test(colorCode);
}

/**
 * Convert RGB color to hex.
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @returns {String} Hex color code.
 */
function convertRGBToHex(r, g, b) {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
}

/**
 * Convert the hex color code to RGB.
 * @param {String} hex The hex color code.
 * @returns {Object} RGB
 */
function convertHexToRGB(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export {
  generateRandomHexColorCode,
  isValidColorCode,
  convertRGBToHex,
  convertHexToRGB,
};
