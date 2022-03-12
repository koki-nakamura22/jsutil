"use strict";

import { generateRandomHexColorCode, isValidColorCode } from "../color.js";

// generateRandomHexColorCode
it("testing generated random hex color code format", () => {
  const colorCode = generateRandomHexColorCode();
  expect(isValidColorCode(colorCode)).toBeTruthy();
});

// isValidColorCode
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
