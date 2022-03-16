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

export { generateRandomHexColorCode, isValidColorCode };
