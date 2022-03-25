"use strict";

/** @module type */

/**
 * Get the type string from the object.
 * @param {*} obj
 * @returns {String} The type string.
 */
function getTypeStr(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 * Get the class name from the object.
 * @param {*} obj
 * @returns {String} The class name.
 */
function getClassNameStr(obj) {
  return obj.constructor.name;
}

/**
 * Get the rough type or the class name from the object.
 * @param {*} obj
 * @returns {String} The rough type name or the class name.
 */
function getTypeStrLoosely(obj) {
  const type = getTypeStr(obj);
  if (type !== "Object") return type;

  return getClassNameStr(obj);
}

/**
 * Compare the data type between object1 and object2.
 * @param {*} obj1
 * @param {*} obj2
 * @returns {Boolean} True: Equal / False: Different
 */
function isEqualType(obj1, obj2) {
  const typeStr1 = getTypeStrLoosely(obj1);
  const typeStr2 = getTypeStrLoosely(obj2);
  return typeStr1 === typeStr2;
}

/**
 * Compare the all data type between the objects in the array.
 * @param {Array} arr
 * @returns {Boolean} True: Equal / False: Different
 */
function isEqualAllTypes(arr) {
  if (getClassNameStr(arr) !== "Array") throw new TypeError();
  if (arr.length <= 0) throw new Error("The array is empty.");

  return arr.every((o) => getTypeStrLoosely(arr[0]) === getTypeStrLoosely(o));
}

export {
  getTypeStr,
  getClassNameStr,
  getTypeStrLoosely,
  isEqualType,
  isEqualAllTypes,
};
