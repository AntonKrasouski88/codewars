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

// Largest pair sum in array
function largestPairSum(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers.at(-1) + numbers.at(-2);
}

console.log(largestPairSum([-100, -29, -24, -19, 19]));
console.log(largestPairSum([10, 14, 2, 23, 19]));

// Count characters in your string
function count(string) {
  const result = {};

  for (let char of string) {
    if (Object.hasOwn(result, char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

console.log(count("abc"));

//Training JS #5: Basic data types--Object
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs`;
}
