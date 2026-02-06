// Return the first M multiples of N
function multiplies(m, n) {
  const result = [];
  for (let i = 1; i <= m; i++) {
    result.push(n * i);
  }

  return result;
}

console.log(multiplies(3, 5));
console.log(multiplies(5, -1));
