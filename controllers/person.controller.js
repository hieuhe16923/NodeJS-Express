const db = require("../models");
const Person = db.person;

// Create a new person
async function create(req, res, next){
    try {
        if(req.body){
            const newPerson = new Person({
                name: req.body.name,
                age: req.body.age,
                stories: req.body.stories
            });
            await newPerson.save()
                .then(insertedDoc => res.status(201).json(insertedDoc));
        }
    } catch (error) {
        next(error);
    }
}

// Edit a person
async function edit(req, res, next){
    try {
        if(req.body){
            await Person.findByIdAndUpdate(
                req.params.id,
                {
                    $set: {name: req.body.name, age: req.body.age},
                    $addToSet: {stories: req.body.stories}
                }
            );
            res.status(200).json(await Person.findById(req.params.id));
        }
    } catch (error) {
        next(error);
    }
}

// List all people
async function list(req, res, next){
    try {
        const people = await Person.find({}).populate("stories").populate("").where();
        const result = people?.map(p => {
            return {
                _id: p._id,
                fullname: p.name,
                age: p.age,
                stories: p.stories?.map(s => s.title)
            }
        });

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    edit,
    list
}