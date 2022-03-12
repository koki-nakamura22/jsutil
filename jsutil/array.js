"use strict";

function shuffleArray(arr) {
  return arr.sort(() => 0.5 - Math.random());
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

function devideArray(baseArr, numOfDiv) {
  const baseArrLen = baseArr.length;
  let newArr = [];
  for (var i = 0; i < Math.ceil(baseArrLen / numOfDiv); i++) {
    var j = i * numOfDiv;
    var p = baseArr.slice(j, j + numOfDiv);
    newArr.push(p);
  }
  return newArr;
}

export { shuffleArray, removeDuplicates, isEmptyArray, devideArray };
