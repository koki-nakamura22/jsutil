"use strict";

function shuffleArray(arr) {
  return arr.sort(() => 0.5 - Math.random());
}

function removeArrayDuplicates(arr) {
  return [...new Set(arr)];
}

function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

function divideArray(sourceArray, numOfDiv) {
  let dividedArray = [];
  for (let line = 0; line < numOfDiv; line++) {
    let lineArray = [];
    for (let i = 0; i < Math.ceil(sourceArray.length / numOfDiv); i++) {
      const value =
        sourceArray[i + line * Math.ceil(sourceArray.length / numOfDiv)];
      if (!value) continue;
      lineArray.push(value);
    }
    if (lineArray.length > 0) dividedArray.push(lineArray);
  }
  return dividedArray;
}

export { shuffleArray, removeArrayDuplicates, isEmptyArray, divideArray };
