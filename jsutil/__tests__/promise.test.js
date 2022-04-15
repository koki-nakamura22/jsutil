"use strict";

import { getPromiseState } from "../promise.js";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

const asyncFuncResolve = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolve");
    }, 1000);
  });
};

const asyncFuncReject = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Reject");
    }, 1000);
  });
};

/**
 * getPromiseState
 */
it("Promise state is pending", async () => {
  const promise = asyncFuncResolve();
  const promiseState = await getPromiseState(promise);
  expect(promiseState).toBe("pending");
});

it("Promise state is fulfilled", async () => {
  const promise = asyncFuncResolve();
  jest.runOnlyPendingTimers();
  const result = await promise;
  const promiseState = await getPromiseState(promise);
  expect(promiseState).toBe("fulfilled");
});

it("Promise state is reject", async () => {
  const promise = asyncFuncReject();
  try {
    jest.runOnlyPendingTimers();
    const result = await promise;
  } catch (error) {
    const promiseState = await getPromiseState(promise);
    expect(promiseState).toBe("rejected");
  }
});
