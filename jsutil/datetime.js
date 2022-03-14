"use strict";

function isDateValid(date) {
  return !Number.isNaN(new Date(date).valueOf());
}

function getDateOfYear(date) {
  return Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
}

function calcDayDiff(date1, date2) {
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
}

function extractTimeFromDate(date) {
  return date.toTimeString().slice(0, 8);
}

export { isDateValid, getDateOfYear, calcDayDiff, extractTimeFromDate };
