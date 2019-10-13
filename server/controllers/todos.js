const todosModel = require('../models/todos');

const getTodosByUserId = async (req, res) =>
{
    const { id } = req.body.user;
    const todos = await todosModel.getTodosByUserId(id);
    res.send(todos);
}

const addTodo =  async (req, res) =>
{
    const { id } = req.body.user;
    const {title, notes, dueDate} = req.body;
    const todos =  await todosModel.addTodo(id, title, notes, dueDate);
    res.send(todos);
}

const editTodo =  async (req, res) =>
{
    const {id, title, notes, completed} = req.body;
    const todos =  await todosModel.editTodo(id, title, notes, completed);
    res.send(todos);
}

const deleteTodo =  async (req, res) =>
{
    const { id } = req.body;
    const todos =  await todosModel.deleteTodo(id);
    res.send(todos);
}

module.exports = { getTodosByUserId, addTodo, editTodo, deleteTodo}

