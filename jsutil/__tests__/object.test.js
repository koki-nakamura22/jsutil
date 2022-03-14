"use strict";

import { deepCopy } from "../object.js";

// deepCopy
it("deeply equivalent", () => {
  const obj = {
    name: "Taro",
    address: {
      postcode: 123,
      city: "Ise",
    },
  };
  const deepCopiedObj = deepCopy(obj);
  deepCopiedObj.address.postcode = 456;
  expect(obj).not.toStrictEqual(deepCopiedObj);
});

it("not deeply equivalent", () => {
  const obj = {
    name: "Taro",
    address: {
      postcode: 123,
      city: "Ise",
    },
  };
  const shallowCopiedObj = obj;
  shallowCopiedObj.address.postcode = 456;
  expect(obj).toStrictEqual(shallowCopiedObj);
});
