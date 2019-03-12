const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({
    controlName:{
        type:String,
        required:true
    },
    value:{
        type:Schema.Types.Mixed
    },
    validation: new Schema({
        required:Boolean,
        minLength:Number,
        maxLength:Number,
        isEmail:Boolean,
        isNumeric:Boolean,
        isDate:Boolean
    }),
    items:[],
    valid:Boolean,
    touched:Boolean,
    errorMessage:String,
    step:Number
});