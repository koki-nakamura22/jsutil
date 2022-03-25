"use strict";

import {
  getTypeStr,
  getClassNameStr,
  getTypeStrLoosely,
  isEqualType,
  isEqualAllTypes,
} from "../type.js";

// getTypeStr
it("detect the type of Boolean object", () => {
  expect(getTypeStr(true)).toBe("Boolean");
});

it("detect the type of Null object", () => {
  expect(getTypeStr(null)).toBe("Null");
});

it("detect the type of Undefined object", () => {
  expect(getTypeStr(undefined)).toBe("Undefined");
});

it("detect the type of Number object", () => {
  expect(getTypeStr(123)).toBe("Number");
});

it("detect the type of BigInt object", () => {
  expect(getTypeStr(9007199254740991n)).toBe("BigInt");
});

it("detect the type of String object", () => {
  expect(getTypeStr("Hello World!")).toBe("String");
});

it("detect the type of Symbol object", () => {
  expect(getTypeStr(Symbol("Sym"))).toBe("Symbol");
});

it("detect the type of a user implemented class object as 'object type'", () => {
  class TestClass {}
  expect(getTypeStr(new TestClass())).toBe("Object");
});

// getClassNameStr
it("detect the class name of Boolean", () => {
  expect(getClassNameStr(true)).toBe("Boolean");
});

it("detect the class name of Number", () => {
  expect(getClassNameStr(123)).toBe("Number");
});

it("detect the class name of BigInt", () => {
  expect(getClassNameStr(9007199254740991n)).toBe("BigInt");
});

it("detect the class name of String", () => {
  expect(getClassNameStr("Hello World!")).toBe("String");
});

it("detect the class name of Symbol", () => {
  expect(getClassNameStr(Symbol("Sym"))).toBe("Symbol");
});

it("detect the class name of Array", () => {
  expect(getClassNameStr([])).toBe("Array");
});

it("detect the class name of Error", () => {
  expect(getClassNameStr(new Error())).toBe("Error");
});

it("detect the class name of a user implemented class", () => {
  class TestClass {}
  expect(getClassNameStr(new TestClass())).toBe("TestClass");
});

// getTypeStrLoosely
it("detect the class name of Boolean", () => {
  expect(getTypeStrLoosely(true)).toBe("Boolean");
});

it("detect the class name of Number", () => {
  expect(getTypeStrLoosely(123)).toBe("Number");
});

it("detect the class name of BigInt", () => {
  expect(getTypeStrLoosely(9007199254740991n)).toBe("BigInt");
});

it("detect the class name of String", () => {
  expect(getTypeStrLoosely("Hello World!")).toBe("String");
});

it("detect the class name of Symbol", () => {
  expect(getTypeStrLoosely(Symbol("Sym"))).toBe("Symbol");
});

it("detect the class name of Array", () => {
  expect(getTypeStrLoosely([])).toBe("Array");
});

it("detect the class name of Error", () => {
  expect(getTypeStrLoosely(new Error())).toBe("Error");
});

it("detect the class name of a user implemented class", () => {
  class TestClass {}
  expect(getTypeStrLoosely(new TestClass())).toBe("TestClass");
});

// isEqualType
it("compare type between the same type objects", () => {
  expect(isEqualType(123, 456)).toBeTruthy();
});

it("compare type between different types of objects", () => {
  class TestClass {}
  expect(isEqualType(123, new TestClass())).toBeFalsy();
});

// isEqualAllTypes
it("compare type between the same type objects in the array", () => {
  const arr = [123, 456, 789, 0];
  expect(isEqualAllTypes(arr)).toBeTruthy();
});

it("compare type between different types of objects in the array", () => {
  const arr = [123, 456, "789", 0];
  expect(isEqualAllTypes(arr)).toBeFalsy();
});

it("an error occur when not array object is passed to the isEqualAllTypes function", () => {
  expect(() => {
    isEqualAllTypes(123);
  }).toThrow(TypeError);
});

it("an error occur when an empty array object is passed to the isEqualAllTypes function", () => {
  expect(() => {
    isEqualAllTypes([]);
  }).toThrowError(new Error("The array is empty."));
});
