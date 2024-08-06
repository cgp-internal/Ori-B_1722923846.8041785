const sqlite3 = require('sqlite3').verbose();
const { Sequelize, DataTypes } = require('sequelize');

const db = new sqlite3.Database(':memory:');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: ':memory:',
});

const { User } = require('./user');
const Order = require('./order');
const Product = require('./product').init(sequelize);

User.createTable(db);

module.exports = { db, sequelize };