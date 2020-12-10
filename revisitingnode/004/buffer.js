const first = Buffer.from("checking", "utf-8");
console.log(first);
console.log(`check: ${Buffer.isBuffer(first)} and ${Buffer.isEncoding("utf-8")}`);

const second = first.toString("hex");
console.log(second);

const str = Buffer.from("wohoo this is unicode friendly");
const ind = str.indexOf("is");


console.log(ind);
console.log(str.indexOf(105));


const buf = Buffer.alloc(23);
console.log(buf.length);