const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Dean Pugh',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Dean Pugh',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'The help message goes here',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is raining',
    location: 'Eastbourne',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
