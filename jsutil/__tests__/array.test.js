"use strict";

import {
  shuffleArray,
  removeArrayDuplicates,
  isEmptyArray,
  divideArray,
  flattenArray,
  removeArrayFalsyValues,
} from "../array.js";

/**
 * shuffleArray
 */
it("shuffle array", () => {
  expect(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).not.toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});

/**
 * removeArrayDuplicates
 */
it("remove array duplicates", () => {
  expect(removeArrayDuplicates([1, 2, 2, 3, 4, 4, 4, 5])).toEqual([
    1, 2, 3, 4, 5,
  ]);
});

it("do not remove unnecesasry array duplicates", () => {
  expect(removeArrayDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

it("remove duplicates with empty array", () => {
  expect(removeArrayDuplicates([])).toEqual([]);
});

/**
 * isEmptyArray
 */
it("an array is empty", () => {
  expect(isEmptyArray([])).toBeTruthy();
});

it("an array is not empty", () => {
  expect(isEmptyArray([1, 2, 3])).toBeFalsy();
});

/**
 * divideArray
 */
it("divide an array lacking", () => {
  expect(divideArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});

it("divide an array even", () => {
  expect(divideArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});

it("divide an array remainder", () => {
  expect(divideArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10],
  ]);
});

it("divide an empty array", () => {
  expect(divideArray([], 3)).toEqual([]);
});

/**
 * flattenArray
 */
it("flatten an array", () => {
  expect(flattenArray(["cat", ["lion", "tiger"]])).toEqual([
    "cat",
    "lion",
    "tiger",
  ]);
});

/**
 * removeArrayFalsyValues
 */
it("remove falsy values from the array", () => {
  expect(
    removeArrayFalsyValues([
      0,
      "a string",
      "",
      NaN,
      true,
      5,
      undefined,
      "another string",
      false,
    ])
  ).toEqual(["a string", true, 5, "another string"]);
});
