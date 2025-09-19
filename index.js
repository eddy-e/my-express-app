// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/name', (req, res) => {
  res.send('This is the name path');
});


app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
