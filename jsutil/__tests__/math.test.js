"use strict";

import {
  isEven,
  average,
  averageArray,
  randomBetweenTwoNumbers,
} from "../math.js";

// isEven
it("num is even", () => {
  expect(isEven(2)).toBeTruthy();
});

it("num is not even", () => {
  expect(isEven(1)).toBeFalsy();
});

// average
it("average parameters (result is integer)", () => {
  expect(average(1, 2, 3)).toEqual(2);
});

it("average parameters (result is decimal)", () => {
  expect(average(1, 3, 4)).toEqual(2.6666666666666665);
});

// averageArray
it("average an array (result is integer)", () => {
  expect(averageArray([1, 2, 3])).toEqual(2);
});

it("average an array (result is decimal)", () => {
  expect(averageArray([1, 3, 4])).toEqual(2.6666666666666665);
});

// randomBetweenTwoNumbers
// Do not need the test because of just generate a random number.
