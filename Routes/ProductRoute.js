const express = require('express');
const route = express.Router();
const {getAllProducts,getOneProduct,createProduct,updateProduct,deleteProduct} = require('../Controller/ProductController')


route.get('/',getAllProducts);
route.post('/',createProduct);
route.get('/:id',getOneProduct);
route.put('/:id',updateProduct);
route.delete('/:id',deleteProduct);


module.exports = route;