const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');
const todosControllers = require('../controllers/todos');
const verifyJWT = require('../jwt_token').verifyJWT;


router.get("/todos", verifyJWT, todosControllers.getTodosByUserId);
router.post("/todos", verifyJWT, todosControllers.addTodo);
router.put("/todos", verifyJWT, todosControllers.editTodo);
router.delete("/todos", verifyJWT, todosControllers.deleteTodo);

router.post("/users", userControllers.addUser);
router.post("/login", userControllers.loginUser);

module.exports = router;