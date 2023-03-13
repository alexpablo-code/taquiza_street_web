const ProductController = require('../controllers/products.controller')

module.exports = app => {
    app.post('/api/addproduct', ProductController.createNewProduct)
    app.get('/api/allproducts', ProductController.allProducts)
    app.get('/api/allproducts/:id', ProductController.oneProduct)
    app.put('/api/allproducts/update/:id', ProductController.updateProduct)
    app.delete('/api/allproducts/delete/:id', ProductController.deleteProduct)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}