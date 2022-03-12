"use strict";

function isEven(num) {
  return num % 2 === 0;
}

function __average(numbers) {
  return numbers.reduce((a, b) => a + b) / numbers.length;
}

function average(...numbers) {
  return __average(numbers);
}

function averageArray(arr) {
  return __average(arr);
}

export { isEven, average, averageArray };
