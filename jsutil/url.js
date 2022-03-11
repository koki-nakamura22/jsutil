function getQueryParameters(urlStr) {
  const params = JSON.parse(
    '{"' +
      decodeURI(urlStr.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return JSON.stringify(params);
}

export { getQueryParameters };
