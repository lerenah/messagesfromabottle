const Sequelize = require('sequelize');
const db = require('./db');

const Message = db.define('message', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING
  },
  pic: {
    type: Sequelize.STRING,
    defaultValue: 'default-album.jpg'
  },
  comment: {
    type: Sequelize.TEXT
  }
});

module.exports = Message;
