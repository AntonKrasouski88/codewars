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