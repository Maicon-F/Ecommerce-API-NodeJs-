const { Router } = require('express')

const routes = Router()


module.exports = routes

routes.get('/', (req, res) => {
    res.send('olá mundo!')
})

routes.post('/users')
routes.post('/login')
routes.patch('/users')
routes.get('/users')
routes.get('/users/:user_id')

routes.post('/products/:user_id')
routes.patch('/products/:user_i/:product_id')
routes.get('/products')
routes.get('/products/:user_id')
routes.get('/products/:product_id')

routes.delete('/products/:user_i/:product_id')


routes.post('/cart/:user_id/:cart_id')
routes.get('/cart/:user_id/:cart_id')
routes.get('/cart/:user_id/:cart_id')