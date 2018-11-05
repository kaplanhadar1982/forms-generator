module.exports.getTests = ('/tests',(req, res) => {
    res.status(200).json({
        "data":"test"
    });
});


module.exports.postTests = ('/tests',(req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        "message":"Test created",
        "item": {"title":title,"content":content}
    });
});