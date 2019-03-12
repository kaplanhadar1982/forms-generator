const Form = require('../models/form');

module.exports.postForm = async (req, res) => {
    try{
        const form = new Form({'formControls':[
            {
                'controlName':'FirstName',
                'value':'',
                'items':null,
                'validation': {'required': true},
                'valid': false,
                'touched': false,
                'errorMessage':'',
                'step':1
            },
            {
                'controlName':'LastName',
                'value':'',
                'items':null,
                'validation': {'required': true},
                'valid': false,
                'touched': false,
                'errorMessage':'',
                'step':1
            },
            {
                'controlName':'FatherName',
                'value':'',
                'items':null,
                'validation': {'required': true},
                'valid': false,
                'touched': false,
                'errorMessage':'',
                'step':1
            },
            {
                'controlName':'GrandFatherName',
                'value':'',
                'items':null,
                'validation': {'required': true},
                'valid': false,
                'touched': false,
                'errorMessage':'',
                'step':1
            },
            {
                'controlName':'RepresentativeBody',
                'value':false,
                'items':null,
                'validation': {'required': true},
                'valid': false,
                'touched': false,
                'errorMessage':'',
                'step':1
        }]});
    
        const result = await form.save();
        res.status(201).json({
            "message":"form created",
            "response": result
        });
    }
    catch(err){
         res.status(500).json({
            "message":"error",
            "log": err
        });
    }
};

module.exports.deleteForm = ((req, res) => {
    Form.findByIdAndRemove(req.body.formId)
        .then(result=>{
            res.status(200).json({
                "message":"Test Item delete",
                "response": result
            });
        })
        .catch(err => {
            res.status(500).json({
                "message":"cant delete the item",
                "log": err
            });
        });
});