function shuffleArray(arr) {
  return arr.sort(() => 0.5 - Math.random());
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function isNotEmpty(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

export { shuffleArray, removeDuplicates, isNotEmpty };
