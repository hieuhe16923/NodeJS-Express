const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();
const morgan = require("morgan");
const createHttpError = require("http-errors");
const db = require("./models");

// const promoRouter = require('./routes/promoRouter');
// const leaderRouter = require('./routes/leaderRouter');
const movieRouter = require('./routes/movieRoutes');

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());


// Routes
// app.use('/promotions', promoRouter);
// app.use('/leaders', leaderRouter);
app.use('/api/movie', movieRouter);

// Error Handling
app.use(async (req, res, next) => {
    next(createHttpError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        "status": err.status || 500,
        "message": err.message
    });
});

// Server Setup
app.listen(process.env.PORT, process.env.HOST_NAME, () => {
    console.log(`Server is running at: http://${process.env.HOST_NAME}:${process.env.PORT}`);

    // MongoDB Connection
    db.connectDB();
})
