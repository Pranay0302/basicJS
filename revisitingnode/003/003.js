var fs = require('fs');
var fs = require('fs');

var checking = fs.readFileSync(`${__dirname}/003.txt`);
var checking1 = checking.toString().toUpperCase();
console.log(checking); // gives us a low level binary buffer
process.stdout.write(checking1); // gives us the desired output