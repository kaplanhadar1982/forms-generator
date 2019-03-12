const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const testController = require('../controllers/test.js');

router.get('/template/:model',(req, res) => {
    res.send(req.params);
});

router.get('/tests',auth,testController.getTestItems);
router.get('/tests/:testItemId',auth,testController.getTestItem);
router.post('/tests',auth,testController.postTestItem);
router.put('/tests',auth,testController.putTestItem);
router.delete('/tests',auth,testController.deleteTestItem);

module.exports = router;

