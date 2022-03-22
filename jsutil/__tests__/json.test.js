"use strict";

import { isJsonObject, isEqualJsonObjects } from "../json.js";

const jsonObjectForTest1 = {
  name: "Koki",
  age: 99,
  address: {
    area: "Kanto",
    prefecture: "Tokyo",
    City1: "Chiyoda-ku",
    City2: "1-1-1",
  },
};

const jsonObjectForTest1Clone = {
  name: "Koki",
  age: 99,
  address: {
    area: "Kanto",
    prefecture: "Tokyo",
    City1: "Chiyoda-ku",
    City2: "1-1-1",
  },
};

const jsonObjectForTest2 = {
  name: "Koki",
  age: 99,
  address: {
    area: "Kanto",
    prefecture: "Tokyo",
    City1: "Chiyoda-ku",
    City2: "1-1-2",
  },
};

// isJsonObject
it("undefined is not JSON object", () => {
  expect(isJsonObject(undefined)).toBeFalsy();
});

it("null is not JSON object", () => {
  expect(isJsonObject(null)).toBeFalsy();
});

it("string is not JSON object", () => {
  expect(isJsonObject("Test strings")).toBeFalsy();
});

it("JSON object is JSON object", () => {
  expect(isJsonObject(jsonObjectForTest1)).toBeTruthy();
});

// isEqualJsonObjects
it("Compare undefined and JSON object1", () => {
  expect(isEqualJsonObjects(jsonObjectForTest1, undefined)).toBeFalsy();
});

it("Compare undefined and JSON object2", () => {
  expect(isEqualJsonObjects(undefined, jsonObjectForTest1)).toBeFalsy();
});

it("Compare null and JSON object1", () => {
  expect(isEqualJsonObjects(jsonObjectForTest1, null)).toBeFalsy();
});

it("Compare null and JSON object2", () => {
  expect(isEqualJsonObjects(null, jsonObjectForTest1)).toBeFalsy();
});

it("Compare not JSON object and JSON object1", () => {
  expect(isEqualJsonObjects(jsonObjectForTest1, "Test strings")).toBeFalsy();
});

it("Compare not JSON object and JSON object2", () => {
  expect(isEqualJsonObjects("Test strings", jsonObjectForTest2)).toBeFalsy();
});

it("JSON Object1 and JSON Object2 are the same (Exactly the same objects)", () => {
  expect(
    isEqualJsonObjects(jsonObjectForTest1, jsonObjectForTest1)
  ).toBeTruthy();
});

it("JSON Object1 and JSON Object2 are the same (Objects with the same structure and value)", () => {
  expect(
    isEqualJsonObjects(jsonObjectForTest1, jsonObjectForTest1Clone)
  ).toBeTruthy();
});

it("JSON Object1 and JSON Object2 are not the same", () => {
  expect(
    isEqualJsonObjects(jsonObjectForTest1, jsonObjectForTest2)
  ).toBeFalsy();
});
