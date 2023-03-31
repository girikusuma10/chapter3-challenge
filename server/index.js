const express = require('express');
const path = require('path');
const carsData = require('./../data/cars.json');

const app = express();
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/cars', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/cars.html'));
});

app.get('/carsData', (req, res) => {
  res.json(carsData);
});

app.listen(3000, () => {
  console.log(`server started at 3000`);
});
