const bodyParser = require("body-parser");
const express = require("express");
const createHttpError = require("http-errors");
const authRouter = express.Router();
authRouter.use(bodyParser.json());

// Register: POST - /api/auth/register
authRouter.post('/register', (req, res, next) => {
    res.status(201).json({
        "email": req.body.email,
        "fullname": req.body.fName + " " + req.body.lName,
        "role": 2
    });
});

// Login: POST - /api/auth/login
authRouter.post('/login', (req, res, next) => {
    res.status(200).json({
        "message": "Login success",
        "email": req.body.email,
        "role": ["moderator", "member"]
    });
});

// Change profile: PUT - /api/auth/change-profile/:accId 
authRouter.put('/change-profile/:accId', (req, res, next) => {
    if(isNaN(req.params.accId))
        next(createHttpError.BadRequest("AccId not a number"));
    else
        res.status(200).json({
            "message": "Update success",
            "data": {
                "id": req.params.accId,
                "email": req.body.email,
                "fName": req.body.fName,
                "lName": req.body.lName
            }
        });
});

module.exports = authRouter;




