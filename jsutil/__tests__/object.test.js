"use strict";

import {
  deepCopy,
  countNumberOfProperties,
  removeProperty,
  removeProperties,
  removePropertyByValue,
  addProperties,
  changePropertyValues,
  convetStringToNumber,
  convertBoolToNumber,
} from "../object.js";

/**
 * deepCopy
 */
it("deeply equivalent", () => {
  const obj = {
    name: "Taro",
    address: {
      postcode: 123,
      city: "Mie",
    },
  };
  const deepCopiedObj = deepCopy(obj);
  deepCopiedObj.address.postcode = 456;
  expect(obj).not.toStrictEqual(deepCopiedObj);
});

/**
 * countNumberOfProperties
 */
it("count the properties the object has", () => {
  const user = {
    name: "Koki",
    age: 100,
    address: "Mie",
  };
  expect(countNumberOfProperties(user)).toBe(3);
});

it("count the properties, but the object has anything", () => {
  const num = 123;
  expect(countNumberOfProperties(num)).toBe(0);
});

/**
 * removeProperty
 */
it("remove the property from the object", () => {
  let user = {
    name: "Koki",
    age: 100,
    address: "Mie",
  };
  user = removeProperty(user, "age");
  expect(user.hasOwnProperty("name")).toBeTruthy();
  expect(user.hasOwnProperty("age")).toBeFalsy();
  expect(user.hasOwnProperty("address")).toBeTruthy();
});

it("remove the property the object does not have it from the object", () => {
  let user = {
    name: "Koki",
    age: 100,
    address: "Mie",
  };
  user = removeProperty(user, "hoge");
  expect(user.hasOwnProperty("name")).toBeTruthy();
  expect(user.hasOwnProperty("age")).toBeTruthy();
  expect(user.hasOwnProperty("address")).toBeTruthy();
});

/**
 * removeProperties
 */
it("remove the properties from the object", () => {
  let user = {
    name: "Koki",
    age: 100,
    address: "Mie",
  };
  user = removeProperties(user, ["name", "address"]);
  expect(user.hasOwnProperty("name")).toBeFalsy();
  expect(user.hasOwnProperty("age")).toBeTruthy();
  expect(user.hasOwnProperty("address")).toBeFalsy();
});

it("remove the properties the object does not have them from the object", () => {
  let user = {
    name: "Koki",
    age: 100,
    address: "Mie",
  };
  user = removeProperties(user, ["hoge", "fuga"]);
  expect(user.hasOwnProperty("name")).toBeTruthy();
  expect(user.hasOwnProperty("age")).toBeTruthy();
  expect(user.hasOwnProperty("address")).toBeTruthy();
});

/**
 * removePropertyByValue
 */
it("remove the property by the value", () => {
  let user = {
    name: "Koki",
    age: 100,
    address: "Mie",
  };
  user = removePropertyByValue(user, 100);
  expect(user.hasOwnProperty("name")).toBeTruthy();
  expect(user.hasOwnProperty("age")).toBeFalsy();
  expect(user.hasOwnProperty("address")).toBeTruthy();
});

it("remove the property the object does not have by the value", () => {
  let user = {
    name: "Koki",
    age: 100,
    address: "Mie",
  };
  user = removePropertyByValue(user, 123);
  expect(user.hasOwnProperty("name")).toBeTruthy();
  expect(user.hasOwnProperty("age")).toBeTruthy();
  expect(user.hasOwnProperty("address")).toBeTruthy();
});

/**
 * addProperties
 */
it("add the properties as JSON object array to the object", () => {
  let user = {
    name: "Koki",
  };
  user = addProperties(user, [{ age: 100 }, { address: "Mie" }]);
  expect(user.hasOwnProperty("name")).toBeTruthy();
  expect(user.age).toBe(100);
  expect(user.address).toBe("Mie");
});

it("add the properties as JSON object to the object", () => {
  let user = {
    name: "Koki",
  };
  user = addProperties(user, {
    age: 100,
    address: "Mie",
  });
  expect(user.hasOwnProperty("name")).toBeTruthy();
  expect(user.age).toBe(100);
  expect(user.address).toBe("Mie");
});

/**
 * changePropertyValues
 */
it("change the values", () => {
  let user = {
    name: "Koki",
    age: null,
    phone: null,
  };
  user = changePropertyValues(user, null, -1);
  expect(user.name).toBe("Koki");
  expect(user.age).toBe(-1);
  expect(user.phone).toBe(-1);
});

/**
 * convetStringToNumber
 */
it("convert the string values to the number values", () => {
  let user = {
    name: "Koki",
    age: "100",
    height: "160",
    weight: "50",
  };
  user = convetStringToNumber(user, ["age", "height", "weight"]);
  expect(user.name).toBe("Koki");
  expect(user.age).toBe(100);
  expect(user.height).toBe(160);
  expect(user.weight).toBe(50);
});

/**
 * convertBoolToNumber
 */
it("convert the boolean values to the number values", () => {
  let user = {
    name: "Koki",
    age: "100",
    isSubscribedNews: true,
    isSubscribedPromotion: false,
    isSubscribedNotification: true,
  };
  user = convertBoolToNumber(user);
  expect(user.name).toBe("Koki");
  expect(user.age).toBe("100");
  expect(user.isSubscribedNews).toBe(1);
  expect(user.isSubscribedPromotion).toBe(0);
  expect(user.isSubscribedNotification).toBe(1);
});
