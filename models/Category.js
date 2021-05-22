const mongoose = require('mongoose')


const CategorySchema = new mongoose.Schema({

    CategoryId : {
        type : mongoose.Schema.Types.ObjectId,
    },
    CategoryName : {
        type : String,
        required: [true, 'Please Enter Category Name ']

    }


})


module.exports = mongoose.model('Category', CategorySchema);
