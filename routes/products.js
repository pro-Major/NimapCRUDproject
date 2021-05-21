const express = require('express')
const router = express.Router();
const { createProduct , deleteProduct , getAllProducts , updateProduct} = require('../controller/Product')

router.route('/')
.get(getAllProducts)
.post(createProduct)

router.route('/product/:id')
.put(updateProduct)
.delete(deleteProduct)


module.exports = router;