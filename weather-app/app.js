const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  return console.log('Please provide an address.')
}

geocode(address, (error, geocodeData) => {

  if (error) {
    return console.log('Error', error);
  }
  
  const { latitude, longitude } = geocodeData;
  forecast({ latitude, longitude }, (error, forecastData) => {
    if (error) {
      return console.log('Error', error);
    }
    
    console.log(geocodeData.placeName);
    console.log(forecastData);
  });
})
