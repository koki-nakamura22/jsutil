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

/**
 * Count the number of properties the object has.
 * @param {Object}
 * @returns {Number} The number of properties.
 */
function countNumberOfProperties(obj) {
  return Object.keys(obj).length;
}

/**
 * Remove the property by name from the object.
 * @param {Object} obj
 * @param {String} propName
 * @returns The object whose property has been deleted.
 */
function removeProperty(obj, propName) {
  delete obj[propName];
  return obj;
}

/**
 * Remove the properties by name from the object.
 * @param {Object} obj
 * @param {Array} propNames The property names.
 * @returns The object whose properties has been deleted.
 */
function removeProperties(obj, propNames) {
  propNames.forEach((propName) => delete obj[propName]);
  return obj;
}

/**
 * Remove the property by value from the object.
 * @param {Object} obj
 * @param {Object} value
 * @returns The object whose property has been deleted.
 */
function removePropertyByValue(obj, value) {
  for (const [k, v] of Object.entries(obj)) {
    if (v === value) delete obj[k];
  }
  return obj;
}

/**
 * Add the properties to the object.
 * @param {Object} obj
 * @param {Object} props
 * @returns The object whose properties has been added.
 * @example
 */
function addProperties(obj, props) {
  if (Array.isArray(props)) {
    props.forEach((prop) => {
      for (const [k, v] of Object.entries(prop)) obj[k] = v;
    });
  } else {
    for (const [k, v] of Object.entries(props)) obj[k] = v;
  }
  return obj;
}

/**
 * Change the specified property value in the object.
 * @param {Object} obj
 * @param {Object} from
 * @param {Object} to
 * @returns The object whose specified property value has been changed.
 */
function changePropertyValues(obj, from, to) {
  Object.keys(obj).forEach((k) => {
    if (obj[k] === from) obj[k] = to;
  });
  return obj;
}

/**
 * Convert a string value to a number value in the object.
 * @param {Object} obj
 * @param {Array} propNames
 * @returns The object whose the values has been converted from string to number.
 */
function convetStringToNumber(obj, propNames) {
  propNames.forEach((propName) => {
    if (!isNaN(+obj[propName])) obj[propName] = +obj[propName];
  });

  return obj;
}

/**
 * Convert a boolean value to a number value in the object.
 * @param {Object} obj
 * @returns The object whose the values has been converted from boolean to number.
 */
function convertBoolToNumber(obj) {
  Object.keys(obj).forEach((k) => {
    if (typeof obj[k] === "boolean") obj[k] = obj[k] === false ? 0 : 1;
  });
  return obj;
}

export {
  deepCopy,
  countNumberOfProperties,
  removeProperty,
  removeProperties,
  removePropertyByValue,
  addProperties,
  changePropertyValues,
  convetStringToNumber,
  convertBoolToNumber,
};
