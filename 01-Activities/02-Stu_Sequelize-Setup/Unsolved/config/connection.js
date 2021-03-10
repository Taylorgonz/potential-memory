const Sequelize = require('sequelize');
require('dotenv').config();

const {
  DB_USER,
  DB_PASS,
  DB_NAME,
} = process.env;

const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
