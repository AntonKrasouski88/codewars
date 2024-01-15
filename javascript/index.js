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