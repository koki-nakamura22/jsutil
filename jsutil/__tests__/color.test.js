"use strict";

import {
  generateRandomHexColorCode,
  isValidColorCode,
  convertRGBToHex,
  convertHexToRGB,
} from "../color.js";

/**
 * generateRandomHexColorCode
 */
it("testing generated random hex color code format", () => {
  const colorCode = generateRandomHexColorCode();
  expect(isValidColorCode(colorCode)).toBeTruthy();
});

/**
 * isValidColorCode
 */
it("valid color code", () => {
  expect(isValidColorCode("#00bfff")).toBeTruthy();
});

it("invalid color code (character code)", () => {
  expect(isValidColorCode("###bfff")).toBeFalsy();
});

it("invalid color code (length lacking)", () => {
  expect(isValidColorCode("#00bff")).toBeFalsy();
});

it("invalid color code (too much length)", () => {
  expect(isValidColorCode("#00bffff")).toBeFalsy();
});

/**
 * convertRGBToHex
 */
it("convert RGB to a hex color code", () => {
  expect(convertRGBToHex(123, 222, 150)).toBe("#7BDE96");
});

/**
 * convertHexToRGB
 */
it("convert a hex color code to RGB", () => {
  expect(convertHexToRGB("#7BDE96")).toStrictEqual({
    r: 123,
    g: 222,
    b: 150,
  });
});
