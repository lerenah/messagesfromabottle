const db = require('./db');
const Podcast = require('./podcast');
const Message = require('./messages');
// require each of your models here...

module.exports = {
  db,
  Podcast,
  Message
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
};
