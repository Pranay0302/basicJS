const fs = require('fs');
var test = fs.createWriteStream('noice.txt'); // will create a txt file

test.write("hey\n");
test.write("hello\n");
test.write("noice\n");
test.end();

test.once('finish', function() {
    console.log("done");
})