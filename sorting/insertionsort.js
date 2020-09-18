// insertionsort

var arr = [1, 5, 3, 8, 0];

function insertionsort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var temp = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}


console.log(`${insertionsort(arr)}`);