const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo,getTodoById } = require("../controllers/getTodo.js");
const { updateTodo} = require("../controllers/updataTodo");

//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);

module.exports = router;