const { createOrder } = require('../services/order');
const Order = require('../models/order');

class OrderController {
  async createOrder(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const newOrder = await createOrder(userId, productId, quantity);
      res.json(newOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  }
}

module.exports = { OrderController };