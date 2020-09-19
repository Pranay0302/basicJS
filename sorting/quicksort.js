// quicksort

var arr = [1, 6, 4, 3, 7, 45, 23];

function quicksort(arr) {
    var len = arr.length
    if (len <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1]; // assuiming pivot to be the last element
    const left = [];
    const right = [];

    for (let i = 0; i < len - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

console.log(`${quicksort(arr)} `);