const db = require("../models");
const Story = db.story;

// Create a new story
async function create(req, res, next){
    try {
        if(req.body){
            const newStory = new Story({
                title: req.body.title,
                fans: req.body.fans
            });
            await newStory.save()
                .then(insertedDoc => res.status(201).json(insertedDoc));
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create
}