"use strict";

/** @module json */

/**
 * Check if the object is a JSON object or not
 * @param {Object} obj
 * @returns {Boolean} True: The object is JSON object. / False: The object is not JSON object.
 */
function isJsonObject(obj) {
  let objForCheck = typeof obj !== "string" ? JSON.stringify(obj) : obj;

  try {
    objForCheck = JSON.parse(objForCheck);
  } catch (e) {
    return false;
  }

  if (typeof objForCheck === "object" && objForCheck !== null) return true;

  return false;
}

/**
 * Check if the JSON objects are the same or not
 * @param {JSON} jsonObj1
 * @param {JSON} jsonObj2
 * @returns {Boolean} True: The JSON objects are the same. / False: The JSON objects are not the same.
 */
function isEqualJsonObjects(jsonObj1, jsonObj2) {
  if (!isJsonObject(jsonObj1)) return false;
  if (!isJsonObject(jsonObj2)) return false;
  return JSON.stringify(jsonObj1) === JSON.stringify(jsonObj2);
}

export { isJsonObject, isEqualJsonObjects };
