"use strict";

import { clearCookies } from "../cookie.js";

// clearCookies
it("clear existing cookies", () => {
  expect(document.cookie).toHaveLength(0);
  document.cookie = "key1=value1;key2=value2;key3=value3;";
  expect(document.cookie).not.toHaveLength(0);
  clearCookies();
  expect(document.cookie).toHaveLength(0);
});

it("clear already empty cookies", () => {
  expect(document.cookie).toHaveLength(0);
  clearCookies();
  expect(document.cookie).toHaveLength(0);
});
