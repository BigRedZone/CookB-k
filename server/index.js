//server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const db = require('../database/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/../client/'));

app.get('/', (req, res) => {
  res.end('GET request initiated!');
});

app.post('/', (req, res) => {
  db.save();
  res.end('POST request initiated!');
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`)
});