require('../db.js')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//todos schema and model
const todosSchema = new Schema({ title: String, notes: String, completed: Boolean, dueDate:Date, userId: String });
const todosModel = mongoose.model('todos', todosSchema, 'todos');


const getTodosByUserId = (userId) =>
{
    return todosModel.find({userId})
}

const addTodo = async (userId, title, notes, dueDate) =>
{
    const newTodo =  new todosModel({title, notes, completed: false, dueDate, userId })
    return newTodo.save()
}

const editTodo =  (id, title, notes, completed, dueDate) =>
{
    const updatedTodo = todosModel.findByIdAndUpdate(id, { title, notes, completed, dueDate }, {new:true});
    return updatedTodo;
}


const deleteTodo =  (id) =>
{
    const deletedTodo = todosModel.findByIdAndRemove(id);
    return deletedTodo;
}

module.exports = { getTodosByUserId, addTodo, editTodo, deleteTodo};

