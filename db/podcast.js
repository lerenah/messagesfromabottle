const Sequelize = require('sequelize');
const db = require('./db');

const Podcast = db.define('podcast', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  audioUrl: {
    type: Sequelize.INTEGER
  },
  artworkUrl: {
    type: Sequelize.STRING
  }
});

module.exports = Podcast;
