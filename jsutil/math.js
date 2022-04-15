"use strict";

/** @module math */

/**
 * Check if the num is even or not.
 * @param {Number} num
 * @returns {Boolean} True: Even. / False: Not even.
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Calculate the average of the numbers function for only used in this file.
 * @param {Array} numbers
 * @returns {Number} Average value.
 */
function __average(numbers) {
  return numbers.reduce((a, b) => a + b) / numbers.length;
}

/**
 * Calculate the average of the numbers.
 * @param  {...number} numbers
 * @returns {Number} Average value.
 */
function average(...numbers) {
  return __average(numbers);
}

/**
 * Calculate the average of the numbers in the array.
 * @param {Array} arr
 * @returns {Number} Average value.
 */
function averageArray(arr) {
  return __average(arr);
}

/**
 * Generate the random number between two numbers.
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} Random value.
 */
function randomBetweenTwoNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { isEven, average, averageArray, randomBetweenTwoNumbers };
