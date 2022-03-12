"use strict";

import {
  shuffleArray,
  removeDuplicates,
  isEmptyArray,
  devideArray,
} from "../array.js";

// shuffleArray
it("shuffle array", () => {
  expect(shuffleArray([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5]);
});

// removeDuplicates
it("remove array duplicates", () => {
  expect(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

it("do not remove unnecesasry array duplicates", () => {
  expect(removeDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

it("remove duplicates with empty array", () => {
  expect(removeDuplicates([])).toEqual([]);
});

// isEmptyArray
it("an array is empty", () => {
  expect(isEmptyArray([])).toBeTruthy();
});

it("an array is not empty", () => {
  expect(isEmptyArray([1, 2, 3])).toBeFalsy();
});

// devideArray
it("devide an array", () => {
  expect(devideArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});

it("devide an empty array", () => {
  expect(devideArray([], 3)).toEqual([]);
});
