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
    name: String,
    principal: String,
    students: Number,
    isGreat: Boolean,
})


const School = new mongoose.model('yesnice', school)
const Student = new mongoose.model('student', student);


connect()
    .then(async connection => {
        const school1 = {
            name: 'kdav',
            principal: 'manas',
            students: 2000,
            isGreat: true
        }

        const school2 = {
            name: 'tiad',
            principal: 'john',
            students: 700,
            isGreat: false
        }

        const school3 = {
            name: "qsad",
            principal: "johnson",
            students: 400,
            isGreat: true,
        };

        /*

        querying associations with populate

         // const school = await School.create({ name: 'DPS' });
         // const deets = await Student.create({ firstName: 'Anthony', school: school._id });
         // // const ID = await Student.findById('5f9022faf78b423515df8fa6'); //felix's id

         // const pop = await Student.findById(deets.id)
         //     .populate('school')
         //     .exec()

         // console.log(pop);

         
         */

        const schools = await School.create([school1, school2, school3]);
        // const find = await School.findOne({ students: { $lt: 1000 }, isGreat: true }).exec(); // qsad

        const find = await School.find({ students: { $lt: 1000 } })
            .sort({ students: 1 }) // ascending
            .exec()

        console.log(find);
        // console.log(schools);
    })
    .catch(err => console.error(err));