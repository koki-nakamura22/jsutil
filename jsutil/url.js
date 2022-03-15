"use strict";

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

function getQueryParameter(urlStr, paramName) {
  const url = new URL(urlStr);
  return url.searchParams.get(paramName);
}

function getQueryParameterCurrentURL(paramName) {
  const url = new URL(window.location.href);
  return url.searchParams.get(paramName);
}

export { getQueryParameters, getQueryParameter, getQueryParameterCurrentURL };
