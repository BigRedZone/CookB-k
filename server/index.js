//server
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to Mongo!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/../client/'));

app.get('/', (req, res) => {
  res.end('GET request initiated!');
});

app.post('/', (req, res) => {
  res.end('POST request initiated!');
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`)
});