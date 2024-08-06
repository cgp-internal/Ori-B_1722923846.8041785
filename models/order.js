const { Sequelize, DataTypes } = require('sequelize');

class Order extends Sequelize.Model {}
Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Product',
      key: 'id',
    },
  },
  quantity: DataTypes.INTEGER,
  total: DataTypes.DECIMAL,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'Order',
  tableName: 'orders',
});

module.exports = Order;