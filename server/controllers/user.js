const userModel = require('../models/user');
const generateJWT = require('../jwt_token').generateJWT;

const cookieDays = (days) => {
    var today = new Date();
    var resultDate = new Date(today);
    resultDate.setDate(today.getDate() + days);
    return resultDate;
}

const registerUser = async(req, res) => {
    const {email, password} = req.body;
    const user = await userModel.registerUser({email, password});
    res.send(user)
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
    console.log("user loggedin ", email)
    console.log("token ", token)
    res.status(200).send({ success: true, token, email });
}

module.exports = { registerUser, loginUser }

