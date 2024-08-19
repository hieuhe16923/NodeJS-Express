const mongoose = require("mongoose");
// import models vào
const Producer = require("./producer");
const Director = require("./director");
const Movie = require("./movie");
const Star = require("./star");



// cau hinh cho mongoose su dung tren toan du an 

mongoose.Promise = global.Promise;

// khai bao doi tuong dai dien can lam viec csdl can lam viec cua mongodb server

const db = {};

//tao doi tuong
db.producer = Producer;
db.director = Director;
db.movie = Movie;
db.star = Star;

db.connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME,
    })
        .then(() => {
            console.log("Connect to MongoDB Success!");
        })
        .catch(error => {
            console.error(error.message);
            process.exit();
        })
}

module.exports = db; 