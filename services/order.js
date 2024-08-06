const Order = require('./models/order');
const Product = require('./models/product');

async function createOrder(userId, productId, quantity) {
  const product = await Product.init().findOne({ where: { id: productId } });
  if (!product) {
    throw new Error('Product not found');
  }

  const total = product.price * quantity;
  const newOrder = await Order.create({ userId, productId, quantity, total });
  return newOrder;
}

module.exports = { createOrder };