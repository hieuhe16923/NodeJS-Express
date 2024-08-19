const mongoose = require("mongoose");
const {Schema} = mongoose;

const personSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: 30
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 100
    },
    stories: [
        {
            type: Schema.Types.ObjectId,
            ref: "story"
        }
    ]
}, {
    timestamps: true
});

const Person = mongoose.model("person", personSchema);
module.exports = Person;