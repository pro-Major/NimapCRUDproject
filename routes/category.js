const express = require('express')
const router = express.Router();

const { createCategory } = require('../controller/Category')


router.route('/category/new')
.post(createCategory)



module.exports = router;
