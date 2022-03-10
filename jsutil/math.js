function isEven(num) {
  return num % 2 === 0;
}

function average(...numbers) {
  return numbers.reduce((a, b) => a + b) / numbers.length;
}

export { isEven, average };
