"use strict";

import {
  isDateValid,
  getDateOfYear,
  calcDayDiff,
  timeFromDate,
} from "../datetime.js";

// isDateValid
describe.each([
  "Mon Mar 14 2022 13:39:05 GMT+0900 (日本標準時)",
  "Mon, 14 Mar 2022 04:45:59 GMT",
  "2022-03-14T13:02:40+09:00",
])("a date is valid", (date) => {
  expect(isDateValid(date)).toBeTruthy();
});

it("a date is invalid", () => {
  expect(isDateValid("2022/15/30")).toBeFalsy();
});

// getDateOfYear
it("test date of year", () => {
  jest.useFakeTimers().setSystemTime(new Date("2022/03/14").getTime());
  expect(getDateOfYear(new Date("2022/03/14"))).toEqual(73);
});

it("test date of leap year (before leap day)", () => {
  jest.useFakeTimers().setSystemTime(new Date("2020/03/14").getTime());
  expect(getDateOfYear(new Date("2022/02/20"))).toEqual(51);
});

it("test date of leap year (leap day)", () => {
  jest.useFakeTimers().setSystemTime(new Date("2020/03/14").getTime());
  expect(getDateOfYear(new Date("2022/02/29"))).toEqual(60);
});

it("test date of leap year (after day)", () => {
  jest.useFakeTimers().setSystemTime(new Date("2020/03/14").getTime());
  expect(getDateOfYear(new Date("2022/03/14"))).toEqual(73);
});

// calcDayDiff
it("calc day diff (date2 < date1)", () => {
  const date1 = new Date("2022/03/14");
  const date2 = new Date("2022/03/01");
  expect(calcDayDiff(date1, date2)).toEqual(13);
});

it("calc day diff (date1 == date2)", () => {
  const date1 = new Date("2022/03/14");
  const date2 = new Date("2022/03/14");
  expect(calcDayDiff(date1, date2)).toEqual(0);
});

it("calc day diff (date1 < date2)", () => {
  const date1 = new Date("2022/03/01");
  const date2 = new Date("2022/03/14");
  expect(calcDayDiff(date1, date2)).toEqual(13);
});

// timeFromDate
it("time from date", () => {
  jest.useFakeTimers().setSystemTime(new Date("2022/03/14 13:52:31").getTime());
  expect(timeFromDate(new Date())).toEqual("13:52:31");
});
