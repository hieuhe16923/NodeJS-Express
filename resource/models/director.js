const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorSchema = new Schema({
    fullname: { type: String, required: true },
    dob: { type: Date },
    nationality: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Director = mongoose.model('Director', directorSchema);
module.exports = Director;
