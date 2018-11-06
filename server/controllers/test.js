const TestItem = require('../models/test');

module.exports.getTestItems = ((req, res) => {
    TestItem.find()
        .then(testItems =>{
            res.status(200).json({
                "testItems":testItems
            });
        })
        .catch(err => {
            res.status(500).json({
                "message":"error",
                "log": err
            });
        });
});

module.exports.getTestItem = ((req, res) => {
    TestItem.findById(req.params.testItemId)
        .then(testItem =>{
            res.status(200).json({
                "testItem":testItem
            });
        })
        .catch(err => {
            res.status(500).json({
                "message":"error",
                "log": err
            });
        });
});


module.exports.postTestItem = ((req, res) => {
    const field1 = req.body.field1;
    const field2 = req.body.field2;
    const testItem = new TestItem({'field1':field1,'field2':field2});
    testItem.save()
        .then(result=>{
            res.status(201).json({
                "message":"Test Item created",
                "log": result
            });
        })
        .catch(err => {
            res.status(500).json({
                "message":"error",
                "log": err
            });
        });
    
});

module.exports.putTestItem = ((req, res) => {
    const field1 = req.body.field1;
    const field2 = req.body.field2;

    TestItem.findById(req.body.testItemId)
        .then(testItem =>{
            testItem.field1 = field1;
            testItem.field2 = field2;
            return testItem.save();
        })
        .then(result=>{
            res.status(201).json({
                "message":"Test Item updated",
                "log": result
            });
        })
        .catch(err => {
            res.status(500).json({
                "message":"not find a item to update",
                "log": err
            });
        });
});

module.exports.deleteTestItem = ((req, res) => {
    TestItem.findByIdAndRemove(req.body.testItemId)
        .then(result=>{
            res.status(200).json({
                "message":"Test Item delete",
                "log": result
            });
        })
        .catch(err => {
            res.status(500).json({
                "message":"cant delete the item",
                "log": err
            });
        });
});