// freeze method prevents from altering the object properties

const chillin = {
    track: 107
}

Object.freeze(chillin);
chillin.track = 203;

console.log(chillin.track); // 107
console.log(Object.isFrozen()); // true