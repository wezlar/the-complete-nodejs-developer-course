const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  return console.log('Please provide an address.');
}

geocode(address, (error, { latitude, longitude, placeName } = {}) => {
  if (error) {
    return console.log('Error', error);
  }

  forecast({ latitude, longitude }, (error, forecastData) => {
    if (error) {
      return console.log('Error', error);
    }

    console.log(placeName);
    console.log(forecastData);
  });
});
