const jwt = require('jsonwebtoken'); 

const User = require('../models/user');

authMiddleware = async (req, res,next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','');
        const decode = jwt.verify(token,process.env.JWTSECRET);
        const user = await User.findOne({'_id': decode._id, 'tokens.token': token});
        
        if(!user){
            throw new Error();
        }
        req.user = user;
        next();
    }
    catch(e){
        res.status(401).send();
    }
}

module.exports = authMiddleware