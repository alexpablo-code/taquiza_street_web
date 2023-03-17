const ProductController = require('../controllers/products.controller')
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.post('/api/addproduct', authenticate, ProductController.createNewProduct)
    app.get('/api/allproducts', authenticate, ProductController.allProducts)
    app.get('/api/allproducts/:id', ProductController.oneProduct)
    app.put('/api/allproducts/update/:id', authenticate, ProductController.updateProduct)
    app.delete('/api/allproducts/delete/:id', authenticate, ProductController.deleteProduct)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}