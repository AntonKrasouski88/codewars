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


//Task: Subsrting fun
function nthChar(words) {
    return words.reduce((accum, el, i) => accum + el[i], '');
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

//Task: Testeing 1-2-3
function number (array) {
    return array.length !== 0 ? array.map((el, i) => `${i + 1}: ${el}`) : [];
}

console.log(number([]));
console.log(number(['a', 'b', 'c']));

//Task: Don't give me five
function dontGiveMeFive (start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        `${i}`.indexOf('5') === -1 && count++;
    }
    return count
}

console.log(dontGiveMeFive(1,73));
console.log(dontGiveMeFive(4,17));

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


//Task: Find the cappitals
function cappitals(word) {
    let arr = [];

    for(let i = 0; i < word.length; i++) {
        if(word[i] === word[i].toUpperCase()) {
            arr.push(i)
        }
    }
    return arr
}

console.log(cappitals('CodEWaRs'));


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

console.log(bingo([['BHCW',87], ['PILSXIZV',86]], 1));
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
console.log(bingo([['FRZ',70], ['HX',69], ['HPAJNE',87], ['UQWHEB',68], ['LUVH',67], ['RU',80], ['XQOEQSKI',83]]));

['BHCW',87]

//Task: Sort array by string length
function sortByLength(arr) {
    const sortLengtWordArray = arr.sort((a, b) => a.length - b.length);
    return sortLengtWordArray
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