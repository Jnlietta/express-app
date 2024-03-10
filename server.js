const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use('/user', (req, res, next) => {
    res.send('You need to log in');
  });

app.use(express.static(path.join(__dirname, '/public')));

app.get(['/', '/home'], (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});