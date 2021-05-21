const mongoose = require('mongoose')


const CategorySchema = new mongoose.Schema({

    CatergoryId : {
        type : mongoose.Schema.ObjectId,
    },
    CategoryName : {
        type : String,
    }


})


module.exports = mongoose.model('Category', categorySchema);
