// mergesort


var unsorted = [1, 8, 9, 23, 4, 6, 3, 4];

function mergesort(unsorted) {
    var len = unsorted.length;
    if (len < 2) {
        return unsorted;
    }
    const m = Math.floor(len / 2);
    const l = unsorted.slice(0, m);
    const r = unsorted.slice(m, len); // len is not necessary but issa okay 

    const lsorted = mergesort(l);
    const rsorted = mergesort(r);

    return stitch(lsorted, rsorted);
}


function stitch(l, r) {
    let results = [],
        lindex = 0,
        rindex = 0;

    while (lindex < l.length && rindex < r.length) {
        if (l[lindex] < r[rindex]) {
            results.push(l[lindex]); // storing in results array
            lindex++;
        } else {
            results.push(r[rindex]); // storing in results array
            rindex++;
        }
    }


    return results
        .concat(l.slice(lindex))
        .concat(r.slice(rindex));
}

console.log(`${mergesort(unsorted)}`);