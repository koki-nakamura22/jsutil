"use strict";

import { extractFunctionParameters } from "../function.js";

// extractFunctionParameters (with function keyword)
it("extract function params with function keyword and no parameters", () => {
  function greeting() {
    console.info("Hello!");
  }
  expect(extractFunctionParameters(greeting)).toEqual([]);
});

it("extract function params with async and function keywords, no parameters", () => {
  async function returnEmptyPromise() {
    return new Promise();
  }
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([]);
});

it("extract function params with function keyword, a parameter and no default values", () => {
  function greeting(name) {
    console.info(`Hello! My name is ${name}!!!`);
  }
  expect(extractFunctionParameters(greeting)).toEqual(["name"]);
});

it("extract function params with function keyword, a parameter and a default value", () => {
  function greeting(name = "Koki") {
    console.info(`Hello! My name is ${name}!!!`);
  }
  expect(extractFunctionParameters(greeting)).toEqual(["name"]);
});

it("extract function params with async and function keywords, a parameter and no default values", () => {
  async function returnEmptyPromise(retValForResolve) {
    return new Promise();
  }
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
  ]);
});

it("extract function params with async and function keywords, a parameter and a default value", () => {
  async function returnEmptyPromise(retValForResolve = 123) {
    return new Promise();
  }
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
  ]);
});

it("extract function params with function keyword, parameters and no default values", () => {
  function add(x, y) {
    return x + y;
  }
  expect(extractFunctionParameters(add)).toEqual(["x", "y"]);
});

it("extract function params with function keyword, parameters and a default value", () => {
  function add(x = 10, y) {
    return x + y;
  }
  expect(extractFunctionParameters(add)).toEqual(["x", "y"]);
});

it("extract function params with function keyword, parameters and default values", () => {
  function add(x = 10, y = 20) {
    return x + y;
  }
  expect(extractFunctionParameters(add)).toEqual(["x", "y"]);
});

it("extract function params with async and function keywords, parameters and no default values", () => {
  async function returnEmptyPromise(retValForResolve, retValForReject) {
    return new Promise();
  }
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
    "retValForReject",
  ]);
});

it("extract function params with async and function keywords, parameters and a default value", () => {
  async function returnEmptyPromise(
    retValForResolve = "resolve",
    retValForReject
  ) {
    return new Promise();
  }
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
    "retValForReject",
  ]);
});

it("extract function params with async and function keywords, parameters and default values", () => {
  async function returnEmptyPromise(
    retValForResolve = "resolve",
    retValForReject = "reject"
  ) {
    return new Promise();
  }
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
    "retValForReject",
  ]);
});

it("extract function params with function keyword and rest parameters", () => {
  function showParams(...params) {
    params.forEach((v) => console.info(params));
  }
  expect(extractFunctionParameters(showParams)).toEqual(["...params"]);
});

it("extract function params with async and function keyword, rest parameters", () => {
  async function showParams(...params) {
    return new Promise();
  }
  expect(extractFunctionParameters(showParams)).toEqual(["...params"]);
});

// extractFunctionParameters (arrow function)
it("extract function params with arrow function and no parameters", () => {
  const greeting = () => {
    console.info("Hello!");
  };
  expect(extractFunctionParameters(greeting)).toEqual([]);
});

it("extract function params with async arrow function and no parameters", () => {
  const returnEmptyPromise = async () => {
    return new Promise();
  };
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([]);
});

// NG
it("extract function params with arrow function and no default values", () => {
  const greeting = (name) => {
    console.info(`Hello! My name is ${name}!!!`);
  };
  const r = extractFunctionParameters(greeting);
  console.info(r);
  expect(extractFunctionParameters(greeting)).toEqual(["name"]);
});

it("extract function params with arrow function, a parameter and a default value", () => {
  const greeting = (name = "Koki") => {
    console.info(`Hello! My name is ${name}!!!`);
  };
  expect(extractFunctionParameters(greeting)).toEqual(["name"]);
});

// NG
it("extract function params with async arrow function, a parameter and no default values", () => {
  const returnEmptyPromise = async (retValForResolve) => {
    return new Promise();
  };
  const r = extractFunctionParameters(returnEmptyPromise);
  console.info(r);
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
  ]);
});

it("extract function params with async arrow function, a parameter and a default value", () => {
  const returnEmptyPromise = async (retValForResolve = 123) => {
    return new Promise();
  };
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
  ]);
});

it("extract function params with arrow function, parameters and no default values", () => {
  const add = (x, y) => {
    return x + y;
  };
  expect(extractFunctionParameters(add)).toEqual(["x", "y"]);
});

it("extract function params with arrow function, parameters and a default value", () => {
  const add = (x = 10, y) => {
    return x + y;
  };
  expect(extractFunctionParameters(add)).toEqual(["x", "y"]);
});

it("extract function params with arrow function, parameters and default values", () => {
  const add = (x = 10, y = 20) => {
    return x + y;
  };
  expect(extractFunctionParameters(add)).toEqual(["x", "y"]);
});

it("extract function params with async arrow function, parameters and no default values", () => {
  const returnEmptyPromise = async (retValForResolve, retValForReject) => {
    return new Promise();
  };
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
    "retValForReject",
  ]);
});

it("extract function params with async arrow function, parameters and a default value", () => {
  const returnEmptyPromise = async (
    retValForResolve = "resolve",
    retValForReject
  ) => {
    return new Promise();
  };
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
    "retValForReject",
  ]);
});

it("extract function params with async arrow function, parameters and default values", () => {
  const returnEmptyPromise = async (
    retValForResolve = "resolve",
    retValForReject = "reject"
  ) => {
    return new Promise();
  };
  expect(extractFunctionParameters(returnEmptyPromise)).toEqual([
    "retValForResolve",
    "retValForReject",
  ]);
});

it("extract function params with arrow function and rest parameters", () => {
  const showParams = (...params) => {
    params.forEach((v) => console.info(params));
  };
  expect(extractFunctionParameters(showParams)).toEqual(["...params"]);
});

it("extract function params with async arrow function, rest parameters", () => {
  const showParams = async (...params) => {
    return new Promise();
  };
  expect(extractFunctionParameters(showParams)).toEqual(["...params"]);
});