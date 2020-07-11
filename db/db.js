const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/juke',
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
);

module.exports = db;
