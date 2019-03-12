const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.js');
const auth = require('../middlewares/auth');

router.post('/users',userController.postUser);
router.patch('/users/:id',userController.patchUser);
router.post('/users/login',userController.loginUser);
router.get('/users/me',auth,async (req,res) => {
    res.status(200).json({
        "response": req.user
    });
});

module.exports = router;