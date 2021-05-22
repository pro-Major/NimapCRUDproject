const Category = require('../models/Category');


//Create a new Category
exports.createCategory = async (req, res, next) => {

    const category = await Category.create(req.body)

    res.status(201).json({
        success: true,
        category
    });
}
//Get All Category
exports.getCategory = async (req, res, next) => {
    const category = await Category.find();

    res.status(200).json({
        success : true,
        category
    })
}
//get Category by Id
exports.getCategoryById = async (req, res, next) => {

    const category = await Category.findById(req.params.id);

    res.status(200).json({
        success : true,
        category
    })
}
//Update A Category
exports.updateCategory = async (req, res, next) => {
    let category = await Category.findById(req.params.id);

    if(!category) {
        res.status(404).json({
            message : 'Category not found'
        })
    }
    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        category
    })
}

//Delete a Category 
exports.deleteCategory = async (req,res,next) => {
    const category = await Category.findById(req.params.id);

    if (!req.params.id) {
        res.status(400).send({
            message: "Requested Id not found"
        });
    }
        await category.remove();

        res.status(200).json({
            success: true,
            message: 'Category is deleted.'
        })
}