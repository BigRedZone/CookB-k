const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const db = require('../database/index.js');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Acces-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(`${__dirname}/../client/`));

app.post('/recipes', (req, res) => {
  db.find({ username: req.body.username }, (err, recipes) => {
    if (err) {
      console.log(`${req.body.username} not found`);
    } else {
      res.send(recipes);
    }
  });
});

// app.get('/recipe', (req, res) => {
//   res.send('Sending back for /recipe');
// });

app.post('/recipe', (req, res) => {
  db.find({ name: req.body.name, username: req.body.username }, (err, recipes) => {
    if (err) {
      console.log(err);
    } else if (recipes.length === 0) {
      db.create(req.body, (newRecipe) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`${newRecipe} inserted into the db!`);
        }
      });
    } else {
      console.log(`${req.body.name} already exists in database!`);
    }
  });
  db.find({ username: req.body.username }, (err, recipes) => {
    if (err) {
      console.log(`${req.body.username} not found`);
    } else {
      res.send(recipes);
    }
  });
});

app.put('/edit', (req, res) => {
  console.log(req.body);
  db.findOneAndUpdate({ name: req.body.name }, req.body.change)
    .then(() => {
      db.find({ username: req.body.change.username, name: req.body.change.name })
        .then(recipe => res.end(JSON.stringify(recipe)));
    });
});

app.delete('/delete', (req, res) => {
  db.deleteOne(req.body, (err) => {
    if (err) {
      console.log('Could not delete due to: ', err);
    } else {
      console.log('successful deletion!');
      res.end();
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
