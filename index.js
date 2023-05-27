const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.get('/goodbye', (req, res) => {
  res.send('Goodbye, World!');
});


module.exports.handler = serverless(app);

