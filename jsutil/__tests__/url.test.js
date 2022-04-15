"use strict";

import {
  getQueryParameters,
  getQueryParameter,
  getQueryParameterCurrentURL,
} from "../url.js";

function setMockCurrentURL(mockCurrentURL) {
  const currentURLForRestore = window.location.href;

  Object.defineProperty(window, "location", {
    value: {
      href: mockCurrentURL,
    },
  });

  function restore() {
    Object.defineProperty(window.location, "href", {
      get: function () {
        return currentURLForRestore;
      },
    });
  }
  return restore;
}

/**
 * getQueryParameters
 */
it("get query parameters from url which has only one query parameter", () => {
  expect(getQueryParameters("https://hoge.com?param1=value1")).toEqual({
    param1: "value1",
  });
});

it("get query parameters from url which has multiple query parameters", () => {
  expect(
    getQueryParameters("https://hoge.com?param1=value1&param2=123")
  ).toEqual({
    param1: "value1",
    param2: "123",
  });
});

/**
 * getQueryParameter
 */
it("get a query parameter from url", () => {
  expect(
    getQueryParameter("https://hoge.com?param1=value1&param2=123", "param2")
  ).toEqual("123");
});

/**
 * getQueryParameterCurrentURL
 */
it("get a query parameter from current url", () => {
  const restore = setMockCurrentURL(
    "https://hoge.com?param1=value1&param2=123"
  );
  expect(getQueryParameterCurrentURL("param1")).toEqual("value1");
  restore();
});
