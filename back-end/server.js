const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

let items = [];
let id = 0;

app.post('/api/items', (req, res) => {
    id = id + 1;
    let item = {
      id: id,
      text: req.body.text,
      completed: req.body.completed
    };
    items.push(item);
    res.send(item);
  });

  app.get('/api/items', (req, res) => {
    res.send(items);
  });

app.listen(3000, () => console.log('Server listening on port 3000!'));