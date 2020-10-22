const mongoose = require('mongoose');

function connect() {
    return mongoose.connect('mongodb://localhost:27017/trial');
}

const student = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    school: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'yesnice'

    }
}, { timestamps: true })


const school = new mongoose.Schema({
    name: String
})


const School = new mongoose.model('yesnice', school)
const Student = new mongoose.model('student', student);


connect()
    .then(async connection => {

        const school = await School.create({ name: 'DPS' });
        const deets = await Student.create({ firstName: 'Anthony', school: school._id });
        // const ID = await Student.findById('5f9022faf78b423515df8fa6'); //felix's id

        const pop = await Student.findById(deets.id)
            .populate('school')
            .exec()

        console.log(pop);
    })
    .catch(err => console.error(err));