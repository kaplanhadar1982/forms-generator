const express = require('express');
const router = express.Router();

const formController = require('../controllers/form.js');

// router.get('/template/:model',(req, res) => {
//     res.send(req.params);
// });

// router.get('/tests',testController.getTestItems);
// router.get('/tests/:testItemId',testController.getTestItem);
router.post('/forms',formController.postForm);
router.delete('/forms',formController.deleteForm);

module.exports = router;
