const userModel = require('../models/user');
const generateJWT = require('../jwt_token').generateJWT;
const bcrypt = require('bcrypt');
const saltRounds = 10;



const registerUser = async(req, res) => {
    const {email, password} = req.body;
    
    bcrypt.hash(password, saltRounds, async (err, hash) => {
        // Store hash in your password DB.
        const user = await userModel.registerUser({email, password:hash});
        res.send(user)
      });    
}


const loginUser = async(req, res) => {
    const { email, password } = req.body;
    const user = await userModel.loginUser({email, password});

    if(!user) { 
        res.send({ success: false })
        return;
    }

    //generate jsonwebtoken
    const token = generateJWT(user);

    res.status(200).send({ success: true, token, email });
}

module.exports = { registerUser, loginUser }

