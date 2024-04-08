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