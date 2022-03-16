"use strict";

/** @module array */

/**
 * Shuffle the array.
 * @param {Array} arr 
 * @returns {Array} Returns the shuffled array.
 */
function shuffleArray(arr) {
  return arr.sort(() => 0.5 - Math.random());
}

/**
 * Remove duplicate objects in the array.
 * @param {Array} arr 
 * @returns {Array} Returns the array with duplicates removed
 */
function removeArrayDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * Check if e array is empty or not.
 * @param {Array} arr 
 * @returns {Boolean} True: The array is empty. / False: The array is not empty.
 */
function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

/**
 * Divide the array by the number of numOfDiv's value.
 * @param {Array} sourceArray 
 * @param {Number} numOfDiv 
 * @example
 * // return [
 *  [1, 2, 3],
 *  [4, 5, 6]
 * ]
 * const dividedArray = divideArray([1, 2, 3, 4, 5, 6], 2);
 * @returns {Two-dimensional array} Divided arrays.
 */
function divideArray(sourceArray, numOfDiv) {
  let dividedArray = [];
  for (let line = 0; line < numOfDiv; line++) {
    let lineArray = [];
    for (let i = 0; i < Math.ceil(sourceArray.length / numOfDiv); i++) {
      const value =
        sourceArray[i + line * Math.ceil(sourceArray.length / numOfDiv)];
      if (!value) continue;
      lineArray.push(value);
    }
    if (lineArray.length > 0) dividedArray.push(lineArray);
  }
  return dividedArray;
}

export { shuffleArray, removeArrayDuplicates, isEmptyArray, divideArray };
