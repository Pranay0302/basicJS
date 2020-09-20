// removing duplicates in a given array

var arr = [1, 3, 4, 4, 2, 6, 2, 3, 7, 9, 6];

var newarr = Array.from(new Set(arr));
console.log(newarr);