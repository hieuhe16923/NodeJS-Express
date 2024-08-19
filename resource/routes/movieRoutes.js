const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// Route để tạo một movie mới
router.post('/create', async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Route để lấy tất cả các movie
router.get('/list', async (req, res) => {
    try {
        const movies = await Movie.find().populate('genres').populate('stars');
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/by-genre/:genre', async (req, res) => {
    try {
        const movies = await Movie.findOne({ genres: req.params.genre });
        if (!movies) return res.status(404).json({ error: 'This movie genre does not exist' });
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;