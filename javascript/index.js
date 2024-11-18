"use strict"

//Task: Take a ten minutes walk
function isValidWalk (walk) {
    let dx = 0;
    let dy = 0;
    const min = walk.length;

    walk.forEach(el => {
        switch (el) {
            case 'n': dy++; break
            case 's': dy--; break
            case 'w': dx++; break
            case 'e': dx--; break
        }
    })

    return min === 10 && dy === 0 && dx === 0
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w']))


//Task: Substring fun
function nthChar(words) {
    return words.reduce((acc, el, i) => acc + el[i], '');
}

console.log(nthChar(['yoda', 'best', 'has']));
console.log(nthChar([]));

//Task: Count the divisors of a number
function getDivisorsCnt(n) {
    let count = 1;

    if (n === 1) return 1

    for (let i = 1; i <= n/2; i++) { 
        if(Number.isInteger(n/i)) {
            count++
        }
    }

    return count
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));

//Task: Number of People in the Bus
const number = (busStops) => {
    return busStops.reduce((acc, el) => acc + el[0] - el[1], 0)
}

console.log(number([[10,0],[3,5],[5,8]]));
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
console.log(number([[0,0]]));

//Task: Testing 1-2-3
function number (array) {
    return array.length !== 0 ? array.map((el, i) => `${i + 1}: ${el}`) : [];
}

console.log(number([]));
console.log(number(['a', 'b', 'c']));

//Task: Don't give me five
function donGiveMeFive (start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        `${i}`.indexOf('5') === -1 && count++;
    }
    return count
}

console.log(donGiveMeFive(1,73));
console.log(donGiveMeFive(4,17));

//Task: Count the divisors of a number
/* function getDivisorsCnt (n) {
    let count = 2;
    if(n === 1) {
        return 1;
    }
    if (n % 2 === 0) {
        for (let i = 2; i <= n/2; i++) {
            Number.isInteger(n/i) && count++
        }
    } else {
        for (let i = 3; i <= n/2; i += 2) {
            Number.isInteger(n/i) && count++
        }
    }
    return count
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54)); */

function getDivisorsCount (n) {
    let arr = []
    let count = 0;
    if (n===1) return 1;

    while (n > 1) {
        for (let i = 2; i <= n; i++) {
            if(Number.isInteger(n/i)) {
                arr.push(i);
                n /= i
                break
            }
        }
    }

    const objNum = arr.reduce((acc, el) => {
        if(acc.hasOwnProperty(el)) {
            acc[el] += 1;
        } else {
            acc[el] = 1;
        }
        return acc
    },{})

    count = Object.values(objNum).reduce((acc, el) => {
        acc *= el + 1;
        return acc;
    }, 1)
    return count
}

function getDivisorsCnt(n){
    var num=0;
    if(n==1) return 1;
    if(n%Math.sqrt(n)==0) num++;
    for(var i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
            num+=2;
        }
    }
    return num;
}

console.log(getDivisorsCount(25));
console.log(getDivisorsCount(11));
console.log(getDivisorsCount(54));

// The best decision
function getDivisorsCnt(n){
    var num=0;
    if(n==1) return 1;
    if(n%Math.sqrt(n)==0) num++;
    for(var i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
            num+=2;
        }
    }
    return num;
}


console.log(getDivisorsCnt(25));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));

//Task: Sum of the first
function SeriesSum(n) {
    let result = 0;

    for(let i = 0; i < n; i++) {
        result += 1 / (3 * i + 1);
    }
    return result.toFixed(2)
}

console.log(SeriesSum(2));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(1));


//Task: Check the exam
function checkExam(array1, array2) {
    let points = 0;

    for(let i = 0; i < array1.length; i++) {
        array1[i] === array2[i] && (points += 4);
        (array1[i] !== array2[i]) && array2[i] && (points -= 1);
    }

    return points > 0 ? points: 0
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));
console.log(checkExam(["b","c","a","a","c","a","a","c","a","c","a","a","b","c","b","c"],
                      ["c","c","c","c", "","a","a","b","a","a", "","a","a", "", "","b"]
));
console.log(checkExam(["c","b","c","b","c","a","a","a","a","c","c","a"], 
                      ["a","a", "","b", "","a", "","b","a", "", "","b"]
));


//Task: Sentence Smash
function smash(words) {
    return words.join(' ')
}

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
console.log(smash([]));
console.log(smash(["Hello"]));


//Task: The highest profit wins!
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1,2,3,4,5]))


//Task: find the missing element between two arrays
function findMissing(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return arr1[i]
        }
    }
}

console.log(findMissing([1, 2, 3], [1, 3]));


//Task: Your order, please
/* function order(words) {
    let wordsSort = [];
    let arr1 = words.split(' ');

    arr2 = arr1.map(el => el.split('').sort());

    for(let i = 0; i < arr1.length; i++) {
        wordsSort[+arr2[i][0] - 1] = arr1[i];
    }
    
    return wordsSort.join(' ');
}

console.log(order("is2 Thi1s T4est 3a")); */

function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}  


//Task: Working with arrays I(and why your code fails in some)
function withoutLast(arr) {
    return arr.slice(0, -1)
}

console.log(withoutLast([1, 2, 3, 4, 5]));
console.log(withoutLast([ 93, 57, 28, 97, 88, 95, 94, 1, 86, 75 ]));


//Task: Detect Pangram
/* function isPangram(string) {
    const regexWithLetter = /[a-z]/ig;
    let str = string.toLowerCase().match(regexWithLetter);
    str = [...new Set(str)].sort();

    return str.length === 26
} */

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));


//Task: split strings
function solution(str) {
    let arr = [];
    let newStr = '';

    for(let char of str){
        newStr += char;

        if(newStr.length == 2) {
            arr.push(newStr);
            newStr = '';
;        }
    }

    if(arr.length !== str.length / 2) {
        arr.push(`${str[str.length - 1]}_`)
    }

    return arr
}

/* function solution(str){
    arr = [];
    for(let i = 0; i < str.length; i += 2){
      second = str[i+1] || '_';
      arr.push(str[i] + second);
    }
    return arr;
  }
 */
console.log(solution('abcdef'));
console.log(solution("abcdefg"));


//Task: Sum mixed array
function sumMix(arr) {
    return arr.reduce((acc, el) => acc + (+el), 0)
}

console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));


//Task: CSV representation of array
function toCsvText(array) {
    return array.join('/n')
}

console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ] ));


//Task: Leap Years
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 == 0);
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2100));


//Task: If you can't sleep, just count sheep
function countSheep(num) {
    let str = '';
    for(let i = 1; i <= num; i++) {
        str += `${i} sheep...`
    }
    
    return str
}

console.log(countSheep(3));


//Task: Perfect Number Verifier
function isPerfect(n) {
    let sum = 0;

    for(let i = 1; i <= n/2 + 1; i++) {
        if(n % i == 0) {
            sum += i + n / i;
        }
    }

    return sum == n && n > 1;
}

console.log(isPerfect(6));
console.log(isPerfect(28));
console.log(isPerfect(1));
console.log(isPerfect(23459879034));


//Task: How many arguments
function args_count(...rest) {
    return rest.length
}

console.log(args_count());
console.log(args_count('a'));
console.log(args_count('a', 'b'));


//Task: Build a square
const generateShape = (integer) => {
    str = ''
    for(let i = 0; i < integer; i++) {
        if(i !== integer - 1){
            str += `${'*'.repeat(integer)}\n`;
        } else {
            str += '*'.repeat(integer)
        }
    }
    
    return str
}

console.log(generateShape(8));


//Task: Smallest value of in array
const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

console.log(min([1,2,3,4,5], 'value'));
console.log(min([1,2,3,4,5], 'index'));


//Task: Find the capitals
function capitals(word) {
    let arr = [];

    for(let i = 0; i < word.length; i++) {
        if(word[i] === word[i].toUpperCase()) {
            arr.push(i)
        }
    }
    return arr
}

console.log(capitals('CodEWaRs'));


//Task: Small enough? - Beginner
function smallEnough(a, limit) {
    return Math.max(...a) <= limit;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));


//Task: Insert dash
function insertDash(num) {
    let str = '' + num;
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if(+str[i] % 2 !== 0 && +str[i + 1] % 2 !== 0 && i !== str.length - 1) {
            result += str[i] + '-';
        } else {
            result += str[i];
        }
    }
    return result
    //return String(num).replace(/([13579])(?=[13579])/g, '$1-');
}

console.log(insertDash(454793));
console.log(insertDash(123456));
console.log(insertDash(1003567));


//Task: Scroll Text
function scrollingText(text) {
    let arr = [];
    text = text.toUpperCase();

    for(let i = 0; i < text.length; i++) {
        arr.push(text);
        text = text.slice(1) + text[0];
    }

    return arr;
}

console.log(scrollingText("CODEWARS"));


//Task: Lottery Ticket
function bingo(ticket, win) {
    let num = ticket.reduce((acc, el) => {
        for (let char of el[0]) {
            if(char.charCodeAt(char)=== el[1]) {
                acc += 1;
                break;
            }
        }
        return acc;
    }, 0)
    return num >= win ? 'Winner' : 'Loser';
}


console.log(bingo([['ABC', 65], ['HGR', 74], ['BAHT', 74]], 2));


//Task: Sort array by string length
function sortByLength(arr) {
    const sortLengthWordArray = arr.sort((a, b) => a.length - b.length);
    return sortLengthWordArray
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));


//Task: Homogenous array
function filterHomogenous(arrays) {
    return arrays.filter(arr => arr.length !== 0 && arr.every((el, _, arr) => typeof(el) === typeof(arr[0])))
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));


//Task: row weights
function rowWeights(arr) {
    let weights = [0, 0];
    arr.forEach((el, index) => {
        if(index % 2 === 0) {
            weights[0] += el; 
        } else {
            weights[1] += el;
        }
    });
    return weights;
}

console.log(rowWeights([50,60,70,80]));


//Task: Write Number in Expanded Form
function expandedForm(num) {
    let arr = num.toString().split('');
    let result = '';
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== '0') {
            if(result.length !== 0) {
                result = result + ' + ' + arr[i].padEnd(arr.length - i, "0");
            } else {
                result = arr[i].padEnd(arr.length - i, "0");
            }
        }
    }
    return result
}

console.log(expandedForm(70304));


//Task: Is every value in the array an array
function arrCheck (value) {
    return value.every(el => Array.isArray(el));
}

console.log(arrCheck([[1],[2]]));
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']));


//Task: Playing with digits
function digPow(n, p) {
    let str = n.toString();
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        sum += Math.pow(parseInt(str[i]), p + i);
    }
    if(sum % n === 0) {
        return sum / n;
    } else {
        return -1;
    }       
}

console.log(digPow(46288, 3));
console.log(digPow(92, 1));
console.log(digPow(89, 1));

//Task: Make a square box!
function box(num) {
    let arr = [];
    let count = num;
    while(count > 0) {
        if(count === 1 || num == count) {
            arr.push('-'.repeat(num));
            count--;
        } else {
            arr.push('-' + ' '.repeat(num - 2) + '-');
            count--;
        }
    }
    return arr;
}

console.log(box(5));
console.log(box(2));
console.log(box(4));
console.log(box(3));


//Task: Magic index
function findMagic(arr) {
/*     for(let i = 0; i < arr.length; i++) {
        if(arr[i] === i) {
            return arr[i];
        }
    }
    return -1 */
    return arr.findIndex(i => i == arr[i])
}

console.log(findMagic([-20,-10,2,10,20]));
console.log(findMagic([6, 5, 83, 5, 3, 18]));

//Task: Email Address Obfuscator
function obfuscate(email) {
    //return email.split('').map(el => el == '@' ? ' [at] ': el == '.' ? ' [dot] ' : el).join('');
    return email.replace(/@/gi, ' [at] ').replace(/\./gi, ' [dot] ')
}

console.log(obfuscate('user_name@example.com'));


//Task: Count the smile faces
function countSmileys(arr) {
    const correctSmile1 = [':)',':D',':-)',':-D', ':~)',':~D'];
    const correctSmile2 = [';)',';D',';-)',';-D', ';~)',';~D'];
    let count = 0;

    for(smile of arr) {
        if(smile[0] === ':') {
            for (el of correctSmile1) {
                if(smile === el) {
                    count++;
                }
            }
        }
        if(smile[0] === ';') {
            for (el of correctSmile2) {
                if(smile == el) {
                    count++;
                }
            }
        }
    }

    return count
}
//const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);

console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));


//Task: Two oldest ages
function twoOldestAges(ages) {
    return ages.sort((a,b) => a - b).slice(- 2)
}

console.log(twoOldestAges([1,5,87,45,8,8]));


//Task: Anagram Detection
function isAnagram(test, original) {
    test = test.toLowerCase().split('').sort()
    original = original.toLowerCase().split('').sort()

    return test.join('')=== original.join('')   
}

console.log(isAnagram("foefet", "toffee"));


//Task: Find the divisors
function divisors(integer) {
    const arr = []
    for(let i = 2; i <= Math.ceil(integer/2); i++) {
        if(integer % i === 0) {
            arr.push(i)
        }
    }
    if(arr.length !== 0) {
        return arr
    } else {
        return `${integer} is prime`
    }
}

console.log(divisors(12));
console.log(divisors(13));


//Task: Unique in order
function  uniqueInOrder(iterable) {
    const arr = [];
    
    for(let i = 0; i < iterable.length; i++) {
        
      if(arr[arr.length - 1] !== iterable[i]) arr.push(iterable[i])
    }
    
    return arr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));


//Task: Principal Diagonal|VS|Secondary Diagonal
function diagonal(matrix) {
    firstArr = [];
    secondArr = [];

    for(let i = 0; i < matrix.length; i++) {
        firstArr.push(matrix[i][i])
        secondArr.push(matrix[i][matrix[i].length - 1 - i])
    }

    firstArr = firstArr.reduce((acc, el) => acc + el);
    secondArr = secondArr.reduce((acc, el) => acc + el);

    if(firstArr > secondArr) return "Principal Diagonal win!"
    if(firstArr < secondArr) return "Secondary Diagonal win!"
    if(firstArr === secondArr) return "Draw!"
}

console.log(diagonal([[1, 2, 3],
                      [4, 5, 6],
                      [7, 8, 9]]));

console.log(diagonal([ [1, 2, 2, 5, 1],
    [4, 1, 6, 1, 1],
    [1, 8, 5, 6 ,2],
    [1, 5, 2, 1, 2],
    [1, 8, 2, 6, 1] ]))

//Task: Remove the minimum
function removeSmallest(numbers) {
    const copyNumbers = [...numbers];
    delete copyNumbers[numbers.indexOf(Math.min(...numbers))]
    return copyNumbers.filter(num => num !== undefined)
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([]));

//Task: find the stray number
function stray(number) {
    let obj = {};
    for(let i = 0; i < number.length; i++) {
        if(obj[number[i]]) {
           obj[number[i]] = obj[number[i]] + 1 
        } else {
            obj[number[i]] = 1
        }
    }

    for(let [key, val] of Object.entries(obj)) {
        console.log(key, val);
        
        if(val === 1) {
            return key
        }
    }
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));


//Money, money, money
function calculateYears(principal, interest, tax, desired) {
    let years = 0;

    while(principal < desired) {
        principal += (principal * interest) * (1 - tax);
        years++;
    }

    return years;
}


console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000,0.01625,0.18,1200));

//Task: Make a function that does arithmetic
function arithmetic(a, b, operator) {
    switch(operator) {
        case("add"):
            return a + b;
        case("subtract"):
            return a - b;
        case("multiply"):
            return a * b;
        case("divide"):
            return a / b
    }
}

console.log(arithmetic(1, 2, "add"));
console.log(arithmetic(8, 2, "subtract"));
console.log(arithmetic(5, 2, "multiply"));
console.log(arithmetic(8, 2, "divide"));

//Find the middle element
function gimme(triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

console.log(gimme([10, 5, 14]));
console.log(gimme([-2,-3,-1]));

//Summing a number's digits
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((acc, el) => acc + +el, 0)
}

console.log(sumDigits(99));
console.log(sumDigits(-32));

//Task: Move 10
function moveTen(s) {
    encryptedWord = '';
    for(let i = 0; i < s.length; i++) {
        num = s.charCodeAt(i) + 10 < 123 ? s.charCodeAt(i) + 10: (s.charCodeAt(i) + 10) - 122 + 96;
        encryptedWord += String.fromCharCode(num);
    }

    return encryptedWord;
}

console.log(moveTen("testcase"));

//Find best path
function findBestPath(grid) {
    const rows = grid[0].length;
    const cols = grid.length;

    if(rows < 3 || cols < 3) {
        return -1
    }

    const arr = Array.from({length: cols}, () => Array(rows).fill(0));

    arr[0][0] = grid[0][0]

    for(let i = 1; i < rows; i++) {
        arr[0][i] = grid[0][i] + arr[0][i - 1]
    }

    for(let i = 1; i < cols; i++) {
        arr[i][0] = grid[i][0] + arr[i - 1][0]
    }

    for(let i = 1; i < cols; i++) {
        for(let j = 1; j < rows; j++){
            const sumX = grid[i][j] + arr[i - 1][j];
            const sumY = grid[i][j] + arr[i][j - 1];
            

            arr[i][j] = sumX > sumY ? sumX : sumY
        }
    }

    return arr[cols - 1][rows - 1]
}


console.log(findBestPath([[1,3,1],[3,5,5],[3,5,3],[10,10,3],[3,5,3]]));


//Task: game map of the island
function moveOnIsland(grid, startCoords, direction) {
    switch(direction) {
        case('north'):
            if(grid[startCoords[0] - 1][startCoords[1]] === 'land') {
                startCoords[0] = startCoords[0] - 1;
                return startCoords
            }
            break    
        case('south'):
            console.log(startCoords);
            if(grid[startCoords[0] + 1][startCoords[1]] === 'land') {
                startCoords[0] = startCoords[0] + 1;
                return startCoords
            }
            break
        case('east'):
            if(grid[startCoords[0]][startCoords[1] + 1] === 'land') {
                startCoords[1] = startCoords[1] + 1;
                return startCoords
            }
            break
        case('west'):
            if(grid[startCoords[0]][startCoords[1] - 1] === 'land') {
                startCoords[1] = startCoords[1] - 1;
                return startCoords
            }
            break
    }
    return startCoords 
}


//console.log(moveOnIsland([["water","water","water","water"],["water","land","land","water"],["water","water","land","water"],["water","water","water","water"]], [0,1], 'east'));
console.log(moveOnIsland([["water","water","water","water"],["water","land","land","water"],["water","water","land","water"],["water","water","water","water"]], [1,1], 'north'));


//Task: Chain me
function chainMe(input, fs) {
    fs.forEach(f => input = f(input));
    return input
}


//Make Upper Case
function makeUpperCase(str) {
    return str.toUpperCase()
}

console.log(makeUpperCase(""));
console.log(makeUpperCase("hello world"));
