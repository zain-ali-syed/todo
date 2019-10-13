const jwt = require('jsonwebtoken');

const JWT_SECRET = "ThisIsASecret"

const generateJWT = ({id, email}) => {
    return jwt.sign({ id, email }, JWT_SECRET);
}

const verifyJWT = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if(bearerHeader){

        const token = bearerHeader.split(' ')[1];
        jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
            if(err) {
                res.sendStatus(403);
            } else {
                req.body.user = decodedUser;
                next();
            }
          });

    } else{
        //no access to this route
        console.log("No token header found ")
        res.sendStatus(403);
    }

}

module.exports = {generateJWT, verifyJWT};
