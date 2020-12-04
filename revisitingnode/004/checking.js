const fs = require('fs');

const trial = () => {
    var use = fs.readFileSync('./noice.txt', { encoding: 'utf8' });
    console.log(use);
}

trial();