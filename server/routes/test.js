const express = require('express');
const router = express.Router();

const testController = require('../controllers/test.js');

router.get('/template/:model',(req, res) => {
    res.send(req.params);
});

router.get('/tests',testController.getTestItems);
router.get('/tests/:testItemId',testController.getTestItem);
router.post('/tests',testController.postTestItem);
router.put('/tests',testController.putTestItem);
router.delete('/tests',testController.deleteTestItem);

module.exports = router;

