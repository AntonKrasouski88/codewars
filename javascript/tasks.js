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

//Add property to every object in array
function addPropertyObject(arr) {
  for (let obj of arr) {
    obj["usersAnswer"] = null;
  }
}

//Add a property to an object
function addProperty(obj, prop, value) {
  if (!Object.hasOwn(obj, prop)) {
    obj[prop] = value;
  } else {
    throw new Error("The property already exists");
  }
}

//Valid Braces
function validBraces(braces) {
  const openBraces = ["(", "{", "["];
  const closeBraces = [")", "}", "]"];
  const strBraces = [];

  for (let br of braces) {
    if (openBraces.includes(br)) {
      strBraces.push(br);
    }

    if (closeBraces.includes(br)) {
      const lastBraces = strBraces.at(-1);
      if (openBraces.indexOf(lastBraces) !== closeBraces.indexOf(br)) {
        return false;
      } else {
        strBraces.pop();
      }
    }
  }

  return strBraces.length === 0;
}

console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("(}"));
console.log(validBraces("[(])"));
console.log(validBraces("[({})](]"));

//Delete occurrences of an element if it occurs more than n times
function deleteNth(arr, n) {
  /*   const obj = {};
  const result = [];

  for (let el of arr) {
    if (Object.hasOwn(obj, `${el}`)) {
      obj[`${el}`] += 1;
      if (obj[`${el}`] <= n) {
        result.push(el);
      }
    } else {
      obj[`${el}`] = 1;
      result.push(el);
    }
  }

  return result; */

  const obj = {};
  return arr.filter((el) => (obj[el] = obj[el] + 1 || 1) <= n);
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1));

//Sum of Minimums
function sumOfMinimums(arr) {
  return arr.reduce((acc, el) => (acc += Math.min(...el)), 0);
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ]),
);

//First non-consecutive number
function firstNonRepeatingLetter(s) {
  /*   const obj = s.split("").reduce((acc, el) => {
    let char = el.toLowerCase();
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});

  for (let chr of s) {
    if (obj[chr.toLowerCase()] === 1) {
      return chr;
    }
  }

  return ''; */
  const string = s.toLowerCase();
  for (let char of string) {
    if (string.indexOf(char) === string.lastIndexOf(char)) {
      return s[string.indexOf(char)];
    }
  }
}

console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"));
