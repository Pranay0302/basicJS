const fs = require('fs');

var test1 = fs.createReadStream('noice.txt'); // will read out the txt file
test1.pipe(process.stdout);