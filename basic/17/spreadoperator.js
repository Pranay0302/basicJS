var a = [...
    'spread'
];
console.log(a);

function add(x, y, z) {
    return x + y + z;
}

const digits = [6, 7, 8];

console.log(add(...digits)); // 21