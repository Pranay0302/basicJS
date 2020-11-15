const mongoose = require('mongoose');
const trial = require('../config/configtest');

const connect = (url = trial.DBurl) => {
    return mongoose.connect(url);
}

// console.log(trial.DBurl);
module.exports = connect;