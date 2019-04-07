require('../db.js')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//todos schema and model!
const todosSchema = new Schema({ title: String, notes: String, completed: Boolean, dateCreated:Date, userId: String });
const todosModel = mongoose.model('todos', todosSchema, 'todos');


const getTodosByUserId = (userId) =>
{
    return todosModel.find({userId}).sort('-dateCreated')
}

const addTodo = async (userId, title, notes, dateCreated = new Date()) =>
{
    const newTodo =  new todosModel({title, notes, completed: false, dateCreated, userId })
    return newTodo.save()
}

const editTodo =  (id, title, notes, completed) =>
{

    //check if the a whole todo is being updated or just the completion flag
    let updateObj;

    if(title) updateObj = {title, notes, completed}
    else updateObj = {completed}

    const updatedTodo = todosModel.findByIdAndUpdate(id, updateObj, {new:true});
    return updatedTodo;
}


const deleteTodo =  (id) =>
{
    const deletedTodo = todosModel.findByIdAndRemove(id);
    return deletedTodo;
}

module.exports = { getTodosByUserId, addTodo, editTodo, deleteTodo};

