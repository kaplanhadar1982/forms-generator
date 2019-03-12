const User = require('../models/user'); 

const postUser = async (req,res) => {
    try{
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;
        const user = new User({'firstname':firstname,'lastname':lastname,'email':email,'password':password});
        await user.save();
        const token = await user.generateAuthToken();

        res.status(201).json({
            "message":"User Item created",
            "response": token
        });
    }
    catch(err){
         res.status(500).json({
            "message":"error",
            "log": err
        });
    }
};

const loginUser = async (req,res) => {
   try{
        const email = req.body.email;
        const password = req.body.password;
    
        const user = await User.findByCredentials(email, password);
        const token = await user.generateAuthToken();

        res.status(200).json({
            "response": token
        });
        
    }
    catch(err){
         res.status(500).json({
            "message":"error",
            "log": err
        });
    }
};

const patchUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstname','lastname', 'email', 'password'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update]);
        const result = await user.save();

        if (!user) {
            return res.status(404).send();
        }

        res.status(202).json({
            "message":"User Item update",
            "response": result
        });
    } catch (e) {
        res.status(400).send(e);
    }
};

module.exports.postUser = postUser;
module.exports.patchUser = patchUser;
module.exports.loginUser = loginUser;