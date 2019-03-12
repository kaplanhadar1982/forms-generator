const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testItemSchema = new Schema({
    field1 : {
        type:String,
        required:true
    },
    field2 : {
        type:Number,
        required:true
    } 
});

module.exports = mongoose.model('TestItem',testItemSchema);
