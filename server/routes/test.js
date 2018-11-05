const express = require('express');
const router = express.Router();

const testController = require('../controllers/test.js');

router.get('/template/:model',(req, res) => {
    res.send(req.params);
});

router.get('/tests',testController.getTests);
router.post('/tests',testController.postTests)

module.exports = router;

