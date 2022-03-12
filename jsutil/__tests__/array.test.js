"use strict";

import {
  shuffleArray,
  removeDuplicates,
  isEmptyArray,
  divideArray,
} from "../array.js";

// shuffleArray
it("shuffle array", () => {
  expect(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).not.toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
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

// divideArray
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
