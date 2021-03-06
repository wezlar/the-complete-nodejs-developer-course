const request = require('request');

const forecast = ({ latitude, longitude } = {}, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=6eead8b948e58809d57f8dcbea84be21&query=' +
    latitude +
    ',' +
    longitude +
    '&unit=m';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined);
    } else if (body.error) {
      console.log(body.error);
      callback('Unable to find the location', undefined);
    } else {
      const {
        temperature,
        feelslike,
        weather_descriptions: weatherDescriptions,
        wind_dir: windDirection,
      } = body.current;
      callback(undefined, {
        display: `${weatherDescriptions[0]}. It is currently ${temperature} degrees outside, it feels like ${feelslike} degrees. The wind direction is ${windDirection}`,
        temperature,
        feelslike,
        weatherDescriptions,
      });
      // console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees outside, it feels like ${feelslike} degrees.`);
    }
  });
};

module.exports = forecast;

// request({ url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service.');
//   } else if (response.body.error) {
//     console.log('Unable to find the location');
//   } else {
//     const { temperature, feelslike, weather_descriptions } = response.body.current
//     console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees outside, it feels like ${feelslike} degrees.`);
//   }
// });
