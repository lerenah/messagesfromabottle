const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/db');
const app = express();
const cors = require('cors');

db.authenticate()
  .then(() => console.log('DB Connected...'))
  .catch(err => console.log('Error ' + err));
// db.sync()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const PORT = process.env.PORT || 5000;

db.sync().then(() =>
  app.listen(PORT, console.log(`Server listening on ${PORT}`))
);
