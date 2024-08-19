const bodyParser = require("body-parser");
const express = require("express");
const { PersonController } = require("../controllers");

const personRouter = express.Router();
personRouter.use(bodyParser.json());

// Create router
personRouter.post("/add", PersonController.create);

// Edit router
personRouter.put("/edit/:id", PersonController.edit);

// List router
personRouter.get("/list", PersonController.list);

module.exports = personRouter;