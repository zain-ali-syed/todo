const userModel = require('../models/user');
const generateJWT = require('../jwt_token').generateJWT;

const cookieDays = (days) => {
    var today = new Date();
    var resultDate = new Date(today);
    resultDate.setDate(today.getDate() + days);
    return resultDate;
}

const addUser = async(req, res) => {
    const {email, password} = req.body;
    const user = await userModel.addUser({email, password});
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
    res.cookie('access_token', token, {expires: cookieDays(7), httpOnly:false, secure:false, SameSite:false, sameSite:false, domain:"http://127.0.0.1:3001/" });
    res.status(200).send({ success: true });
}

module.exports = { addUser, loginUser }

