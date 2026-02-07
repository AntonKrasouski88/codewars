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

//Are the numbers in order
function inAscOrder(arr) {
  const len = arr.length;
  if (len === 0 || len === 1) {
    return true;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
console.log(inAscOrder([1]));
console.log(inAscOrder([]));
