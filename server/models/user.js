require('../db.js')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User schema and model
const usersSchema = new Schema({ email: String, password: String, date_created: String });
const usersModel = mongoose.model('users', usersSchema, 'users');


//check if the email is already registered

const userAlreadyExists = async (email) => {
    const userExists = await usersModel.countDocuments({email});
    return userExists > 0;
}

const checkLoginCredentials = async({email, password}) => {
    const userFound = await usersModel.findOne({email, password});
    return userFound;
}

const registerUser = async ({email, password}) =>
{
    const userExists = await userAlreadyExists(email);
    if(userExists) return {success:false, message:"I'm sorry a user with that email is already registered"};
    
    const newUser = new usersModel({email, password})
    return newUser.save()
}

const loginUser = async ({email, password}) =>
{
    const user = await checkLoginCredentials({email, password});
    return user;
}



module.exports = { registerUser, loginUser };

