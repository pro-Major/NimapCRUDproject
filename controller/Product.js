const Product = require('../models/products');
const Category = require('../models/Category');


// Create new product 
exports.createProduct = async (req,res,next) => { 
    const category = await Category.findById(req.body.categoryId);
    
    req.body.CategoryName = category.CategoryName
    req.body.CategoryId = category.id


    const product = await Product.create(req.body)


    res.status(201).json({
        success: true,
        product,
        category
    });
}


exports.getAllProducts = async (req,res) => {
    const products = await Product.find();

    res.status(200).json({
        success : true,
        products
    })
}

exports.updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id)

    if(!product) {
        res.status(404).json({
            message : 'Product not found'
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
}
//Get a Single Product By ID 
exports.getProductsById = async (req, res) => {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
        success : true,
        product
    })
}



//Delete a Product
exports.deleteProduct = async (req,res,next) => {
    const product = await Product.findById(req.params.id);

    if (!req.params.id) {
        res.status(400).send({
            message: "Requested Id not found"
        });
    }
        await product.remove();

        res.status(200).json({
            success: true,
            message: 'Product is deleted.'
        })
}