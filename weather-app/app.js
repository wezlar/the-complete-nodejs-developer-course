const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const url = 'http://api.weatherstack.com/current?access_key=6eead8b948e58809d57f8dcbea84be21&query=50.783132,0.313633&unit=m';

geocode('Philadelphia', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
})

forecast({ latitude: 40.0115, longitude: -75.1327 }, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

