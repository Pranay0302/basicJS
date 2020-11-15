const mongoose = require('mongoose');
const express = require('express');
const app = express();
const morgan = require('morgan');
const { urlencoded, json } = require('body-parser');
const connect = require('./utils/db');



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

const cats = new mongoose.Schema({
    breed: {
        type: String,
        fur: Boolean,
    },

    food: {
        type: String,
        weight: Number,
    },
});

const Dog = new mongoose.model('doge', dogs);
const Cat = new mongoose.model('kitty', cats);

app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json());

connect('mongodb://localhost:27017/simple_stuff');

app.get('/doge', async(req, res) => {
    console.log('checking doge');
    const inu = await Dog.find({}).lean().exec();
    res.status(200).json(inu);

})

app.get('/kitty', async(req, res) => {
    console.log('checking neko');
    const neko = await Cat.find({}).lean().exec();
    // console.log(res);
    res.status(200).json(neko);

})

connect('mongodb://localhost:27017/simple_stuff')
    .then(async connection => {
        app.listen(5000, () => {
            console.log("running on localhost:5000");
        })
    })
    .catch(err => console.err(err));