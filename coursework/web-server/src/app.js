const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
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
    name: 'Dean Pugh',
    message: 'The help message goes here',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address',
    });
  }

  geocode(
    req.query.address,
    (geocodeError, { latitude, longitude, placeName } = {}) => {
      if (geocodeError) {
        return res.send({
          error: geocodeError,
        });
      }

      forecast({ latitude, longitude }, (forecastError, forecastData) => {
        if (forecastError) {
          return res.send({
            error: forecastError,
          });
        }

        res.send({
          address: placeName,
          forecast: forecastData.display,
          location: 'Eastbourne',
        });
      });
    },
  );
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You mist provide a search term',
    });
  }

  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Dean Pugh',
    errorMessage: 'Help not found.',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Error 404',
    name: 'Dean Pugh',
    errorMessage: 'Page not found.',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
