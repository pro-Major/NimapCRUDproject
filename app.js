const express = require('express');
const app = express();


app.use(express.json());


// Import all routes
const products = require('./routes/products');
// const Category = require('./routes/category');
// const productsAndCategory = require('./routes/productsAndCategory');

// app.use('/', productsAndCategory)
app.use('/',products)
// app.use('category',Category)





module.exports = app
