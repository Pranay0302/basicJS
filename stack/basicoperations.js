const stack = require('./stack');

const s = new stack();

s.push("phillip");
s.push("darlene");
s.push("angela");
s.pop();
console.log(s.peek()); // darlene
console.log(s.length()); // 2
s.clear();
console.log(s.length()); // 0