const mongoose = require('mongoose');

function connect() {
    return mongoose.connect('mongodb://localhost:27017/trial');
}

const student = new mongoose.Schema({
    firstName: String,
    age: Number,
    school: String
}, { timestamps: true })


const Student = new mongoose.model('student', student);


connect()
    .then(async connection => {
        const deets = await Student.create({ firstName: 'Anthony', age: '18', school: 'DPS' });
        const ID = await Student.findById('5f9022faf78b423515df8fa6'); //felix's id
        console.log(deets);
        console.log(ID);
    })
    .catch(err => console.error(err));