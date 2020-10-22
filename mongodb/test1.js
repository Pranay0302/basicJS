const mongoose = require('mongoose');
const express = require('express');
const app = express();
const morgan = require('morgan');
const { urlencoded, json } = require('body-parser');



const dogs = new mongoose.Schema({
    breed: {
        type: String,
        fur: Boolean,
    },

    food: {
        type: String,
        weight: Number
    }

})

const Dog = new mongoose.model('doge', dogs)

app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json());

function connect() {
    return mongoose.connect('mongodb://localhost:27017/simple_stuff');
}

app.get('/doge', async(req, res) => {
    console.log('checking...');
    const inu = await Dog.find({}).lean().exec();
    res.status(200).json(inu);
})

connect()
    .then(async connection => {
        app.listen(5000, () => {
            console.log("running on localhost:5000");
        })
    })
    .catch(err => console.err(err));