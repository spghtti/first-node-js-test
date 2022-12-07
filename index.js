const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/contact-me.html'));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(3000);
