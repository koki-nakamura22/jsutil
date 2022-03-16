"use strict";

/** @module datetime */

/**
 * Check if the date format is valid or invalid.
 * @param {Date} date 
 * @returns {Boolean} True: Valid. / False: Invalid.
 */
function isDateValid(date) {
  return !Number.isNaN(new Date(date).valueOf());
}

/**
 * Get date of the year
 * @param {Date} date 
 * @returns {Number} Date of the year.
 */
function getDateOfYear(date) {
  return Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
}

/**
 * Calculate the difference of the date between date1 and date2.
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns {Number} The difference of the date between date1 and date2.
 */
function calcDayDiff(date1, date2) {
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
}

/**
 * Extract the time strings from the date.
 * @param {Date} date 
 * @returns {String} the time strings.
 */
function extractTimeFromDate(date) {
  return date.toTimeString().slice(0, 8);
}

export { isDateValid, getDateOfYear, calcDayDiff, extractTimeFromDate };
