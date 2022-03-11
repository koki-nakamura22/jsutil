function getQueryParameters(url) {
  url = JSON.parse(
    '{"' +
      decodeURI(url.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return JSON.stringify(url);
}

export { getQueryParameters };
