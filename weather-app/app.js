const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=6eead8b948e58809d57f8dcbea84be21&query=50.783132,0.313633&unit=m';

request({ url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service.');
  } else if (response.body.error) {
    console.log('Unable to find the location');
  } else {
    const { temperature, feelslike, weather_descriptions } = response.body.current
    console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees outside, it feels like ${feelslike} degrees.`);
  }
});

const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Dave%20Angeles.json?access_token=pk.eyJ1IjoiZGVhbnB1Z2giLCJhIjoiY2tlb2Qya2tuMDEybDJybm80OXcwdTE3dSJ9.mRiM-3G2H5dO7agAtQ-IcQ&limit=1';

request({ url: mapboxUrl, json: true}, (error, response) => {
  if (error) {
    console.log('Unable to connecto to location service.');
  } else if (!response.body.features.length) {
    console.log('Unable to find location');
  } else {
    const { features } = response.body;
    const longitude = features[0].center[0];
    const latitude = features[0].center[1];
    console.log(`${longitude} - ${latitude}`);
  }
});
