const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routes/auth.route');
const createHttpError = require('http-errors');
require('dotenv').config();

const port = process.env.PORT || 8080;

// Khởi tạo 1 web server: express
const app = express();

// Thiết lập Middlewares cho Web server
app.use(morgan('dev'));

// Định tuyến request từ client tới đường dẫn gốc của web server
app.get('/api', (req, res, next)=>{
    res.send("<html><body><h1>Welcome to Express server</h1></body></html>");
});

app.get("/api/home", (req, res, next)=>{
    res.status(200).json({
        "message": "Home page"
    });
});

app.get('/api/employee/:id', (req, res, next)=>{
    res.status(200).json({"employeeId": req.params.id});
});

app.use('/api/auth', authRouter);

// Kiem soat cac loi xay ra tren Express server
app.use(async (req, res, next)=>{
    next(createHttpError.NotFound());
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        "status": err.status || 500,
        "message": err.message
    });
});

// Khởi động web server lắng nghe requests gửi tới
app.listen(port, ()=>{
    console.log(`Server is running at: http://localhost:${port}`);
});