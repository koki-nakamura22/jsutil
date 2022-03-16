"use strict";

/** @module url */

/**
 * Get the query parameters from the URL.
 * @param {String} urlStr 
 * @returns {JSON} Query parameters.
 */
function getQueryParameters(urlStr) {
  return JSON.parse(
    '{"' +
      decodeURI(urlStr.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}

/**
 * Get the query parameter by paramName from the URL.
 * @param {String} urlStr 
 * @param {String} paramName 
 * @returns {String} The query parameter value.
 */
function getQueryParameter(urlStr, paramName) {
  const url = new URL(urlStr);
  return url.searchParams.get(paramName);
}

/**
 * Get the query parameter by paramName from the current URL.
 * @param {String} paramName 
 * @returns {String} The query parameter value.
 */
function getQueryParameterCurrentURL(paramName) {
  const url = new URL(window.location.href);
  return url.searchParams.get(paramName);
}

export { getQueryParameters, getQueryParameter, getQueryParameterCurrentURL };
