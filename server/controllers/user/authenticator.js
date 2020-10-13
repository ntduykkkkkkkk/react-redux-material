const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function(req, res, next){
    const token = req.header('Bearer');
    if(!token){
        return res.status(401).send('Authentication token must be \'Bearer [token]');
    }
    try {
        const verify = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verify;
        next()
    } catch (error) {
        return res.status(400).send("Failed to authentication")
    }
}