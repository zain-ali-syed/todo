const jwt = require('jsonwebtoken');

const JWT_SECRET = "ThisIsASecret"

const generateJWT = ({id, email}) => {
    return jwt.sign({ id, email }, JWT_SECRET);
}

const verifyJWT = (req, res, next) => {
    
    //check if cookies are being sent and there is an access JWT token
    if(req.cookies && req.cookies.access_token) {
        const token = req.cookies.access_token;

        //now verify the token
        jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
            if(err) {
                res.sendStatus(403);
            } else {
                req.body.user = decodedUser;
                next();
            }
          });

    }else{
        //no access to this route
        res.sendStatus(403);
    }

}

module.exports = {generateJWT, verifyJWT};
