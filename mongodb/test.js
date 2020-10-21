const mongoose = require('mongoose');

function connect() {
    return mongoose.connect('mongodb://localhost:27017/trial');
}

const student = new mongoose.Schema({
    firstName: String,
    age: Number,
})

const Student = new mongoose.model('student', student);


connect()
    .then(async connection => {
        const deets = await Student.create({ firstName: 'Anthony', age: '18' });
        const ID = await Student.findById('5f9022faf78b423515df8fa6');
        console.log(deets);
        console.log(ID);
    })
    .catch(err => console.error(err));