//server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const db = require('../database/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/../client/'));


app.get('/home', (req, res) => {
  res.send('Sending back for /home');
});

app.get('/recipe', (req, res) => {
  res.send('Sending back for /recipe');
});

app.get('/homepage', (req, res) => {
  res.end('GET request initiated!');
});

app.post('/recipe', (req, res) => {
  db.save();
  res.end('POST request initiated!');
});

app.put('/edit', (req, res) => {
  db.Recipe.findOneAndUpdate(/*conditions, update*/)
    .then(() => {
      console.log('put request successful!')
      res.end(/*Render entire database back to App*/)
    })
});

app.delete('/delete', (req, res) => {
  db.Recipe.deleteOne({id:''}, function(err) {
    if (err) {
      console.log('Could not delete due to: ', err)
    } else {
      console.log('delete request successful!')
      res.end(/*Render entire database back to App*/)
    }
  })
})

app.listen(port, () => {
  console.log(`Listening on ${port}...`)
});