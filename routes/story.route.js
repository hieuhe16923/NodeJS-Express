const bodyParser = require("body-parser");
const express = require("express");
const { StoryController } = require("../controllers");

const storyRouter = express.Router();
storyRouter.use(bodyParser.json());

// Create router
storyRouter.post("/add", StoryController.create);

module.exports = storyRouter;