const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String, required: [true, "movie validation faiiled: title: The movie title is required"]
    },
    release: { type: Date },
    description: { type: String, required: true },
    producer: { type: Schema.Types.ObjectId, ref: 'Producer' },
    director: { type: Schema.Types.ObjectId, ref: 'Director' },
    genres: [{
        type: String,
        enum: {
            values: ["Action", "Drama", "Comedy", "Cartoon"],
            message: 'movie validation failed: genres.0: Comedy 1 is not supported, genres.1: Action 2 is not supported {VALUE}'
        },
        required: true
    }],
    stars: [{ type: Schema.Types.ObjectId, ref: 'Star' }],
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
