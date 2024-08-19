const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producerSchema = new Schema({
    name: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Producer = mongoose.model('Producer', producerSchema);
module.exports = Producer;
