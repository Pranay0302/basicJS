const fs = require('fs');
const trial = require('./trial');

const trial0 = fs.readFileSync('./trial.js', { encoding: 'utf-8' }).toString();

console.log(trial0);
/*  o/p

module.exports = {
    name: 'trial',
    version: '1.0.0',
    description: 'playing with fs',
    waves() {
        console.log('heat waves');
    }
}
*/