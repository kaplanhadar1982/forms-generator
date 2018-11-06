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

// const getProductsFromFile = cb => {
 
// };

// module.exports = class Product {
//   constructor(f1,f2) {
//     this.field1 = f1;
//     this.field2 = f2;
//   }

//   save() {
    
//   }

//   static fetchAll(cb) {
//     getProductsFromFile(cb);
//   }
// };
