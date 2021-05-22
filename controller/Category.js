const Category = require('../models/Category');

exports.createCategory = async (req, res, next) => {

    const category = await Category.create(req.body)

    res.status(201).json({
        success: true,
        category
    });
}


