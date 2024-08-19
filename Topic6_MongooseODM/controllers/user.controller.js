const db = require("../models");
const User = db.user;

// Create a new User
async function create(req, res, next){
    try {
        // Lay du lieu tu request body
        const newUser = new User({
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        });

        await newUser.save()
            .then(newDoc => res.status(201).json(newDoc))
            .catch(error => next(error));

    } catch (error) {
        next(error);
    }
}

async function find(req, res, next){
    try {
        const result = await User.find({});
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const userController = {
    create,
    find
};

module.exports = userController;