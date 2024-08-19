const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starSchema = new Schema({
    fullname: { type: String, required: true },
    male: { type: Boolean, required: true },
    dob: { type: Date },
    nationality: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Star = mongoose.model('Star', starSchema);
module.exports = Star;
