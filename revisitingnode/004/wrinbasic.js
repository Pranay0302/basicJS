const fs = require('fs');

var modest = () => {
    fs.writeFile('basic.txt', `hello from dir:${__dirname} and file: ${__filename}`, { encoding: 'utf8' }, (err) => {
        if (err) {
            console.error();
        } else {
            console.log('worked');
        }
    })
}

modest();