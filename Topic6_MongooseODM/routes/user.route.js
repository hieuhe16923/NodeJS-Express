const bodyParser = require("body-parser");
const express = require("express");
const { UserController } = require("../controllers");

const userRouter = express.Router();
userRouter.use(bodyParser.json());

// Create router
userRouter.post("/create", UserController.create);

// Find all router
userRouter.get("/list", UserController.find);

module.exports = userRouter;