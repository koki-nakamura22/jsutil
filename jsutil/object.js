"use strict";

/** @module object */

/**
 * Copy the obj deeply.
 * @param {Object} obj 
 * @returns {Object} Deep copied object.
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export { deepCopy };
