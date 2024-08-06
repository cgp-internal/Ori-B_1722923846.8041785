const express = require('express');
const router = express.Router();

const { UserController } = require('./controllers/user');
const { OrderController } = require('./controllers/order');
const { ProductController } = require('./controllers/product');

router.post('/users/register', async (req, res) => {
  const userController = new UserController();
  await userController.register(req, res);
});

router.post('/users/login', async (req, res) => {
  const userController = new UserController();
  await userController.login(req, res);
});

router.post('/orders', async (req, res) => {
  const orderController = new OrderController();
  await orderController.createOrder(req, res);
});

router.get('/products', async (req, res) => {
  const productController = new ProductController();
  await productController.getAllProducts(req, res);
});

router.get('/products/:id', async (req, res) => {
  const productController = new ProductController();
  await productController.getProductById(req, res);
});

module.exports = router;