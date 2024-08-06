const { Product } = require('./models/product');

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve products' });
    }
  }

  async getProductById(req, res) {
    try {
      const id = req.params.id;
      const product = await Product.findByPk(id);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json(product);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve product' });
    }
  }
}

module.exports = ProductController;