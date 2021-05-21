const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    ProductId : { 
        type : mongoose.Schema.ObjectId,
    },
    ProductName : {
        type : String,
        required: [true, 'Please Enter Product Name ']
    }
    
})

module.exports = mongoose.model('Product', productSchema);

