function arraymul2(array) {
    const op = [];

    for (let i = 0; i < array.length; i++) {
        op.push(array[i] * 2);
    }

    return op;
}

const myarray = [5, 6, 7, 8, 9, 10];
const result = arraymul2(myarray);

console.log(result);