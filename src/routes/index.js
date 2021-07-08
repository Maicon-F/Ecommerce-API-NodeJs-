const { Router } = require('express')

const UserController = require('../controllers/UserController')
const LoginController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')
const routes = Router()


module.exports = routes

routes.get('/', (req, res) => {
    res.send('olá mundo!')
})

routes.post('/users', UserController.createUser)
routes.post('/login', LoginController.createSession)
routes.patch('/users')
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/products/:user_id', ProductController.createProduct)
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
routes.get('/products', ProductController.getProducts)
routes.get('/products/:user_id', ProductController.getUserProducts)
routes.get('/products/id/:product_id', ProductController.getProductById)
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)


routes.post('/carts/:user_id', CartController.createCart)
routes.get('/carts/:user_id', CartController.getUserCart)
routes.get('/carts/:user_id/:cart_id', CartController.getCart)