// bubblesort

var n = [1, 6, 30, 4, 84];

function bubblesort(n) {
    var swapped = false;
    var len = n.length;

    for (var i = 0; i < len; i++)
        for (var j = 0; j < len - i - 1; j++) {
            if (n[j] > n[j + 1]) {
                let temp = n[j];
                n[j] = n[j + 1];
                n[j + 1] = temp;
                swapped = true;
            }
        }
    return n;

}

console.log(`${bubblesort(n)}`);