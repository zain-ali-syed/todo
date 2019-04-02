require('../db.js')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//todos schema and model
const todosSchema = new Schema({ title: String, notes: String, completed: Boolean, userId: String });
const todosModel = mongoose.model('todos', todosSchema, 'todos');


const getTodosByUserId = (userId) =>
{
    return todosModel.find({userId})
}

const addTodo = async (userId, title, notes) =>
{
    const newTodo =  new todosModel({title, notes, completed: false, userId })
    return newTodo.save()
}

const editTodo =  (id, title, notes, completed) =>
{
    const updatedTodo = todosModel.findByIdAndUpdate(id, { title, notes, completed }, {new:true});
    return updatedTodo;
}


const deleteTodo =  (id) =>
{
    const deletedTodo = todosModel.findByIdAndRemove(id);
    return deletedTodo;
}

module.exports = { getTodosByUserId, addTodo, editTodo, deleteTodo};

