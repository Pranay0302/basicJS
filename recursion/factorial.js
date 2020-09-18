// factorial


function factorial(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


function yes(n) {
    console.log(`${n}! is ${factorial(n)}`);
}

yes(6);