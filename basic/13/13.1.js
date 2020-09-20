// duplicating a given array


var arr = [1, 3, 5, 7, 9];

function duplicate(arr) {
    return arr.concat(arr);
}

console.log(`sol: ${duplicate(arr)}`);