const mongoose = require('mongoose');

const fromControlSchema = require('./form-control');

const Schema = mongoose.Schema;

// const fromControlSchema = new Schema({
//     controlName:{
//         type:String,
//         required:true
//     },
//     value:{
//         type:Schema.Types.Mixed
//     },
//     validation: new Schema({
//         required:Boolean,
//         minLength:Number,
//         maxLength:Number,
//         isEmail:Boolean,
//         isNumeric:Boolean,
//         isDate:Boolean
//     }),
//     items:[],
//     valid:Boolean,
//     touched:Boolean,
//     errorMessage:String,
//     step:Number
// });

const formSchema = new Schema({
    formControls : [
        fromControlSchema
    ]
});

module.exports = mongoose.model('Form',formSchema);
