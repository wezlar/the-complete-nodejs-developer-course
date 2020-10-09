const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGVhbnB1Z2giLCJhIjoiY2tlb2Qya2tuMDEybDJybm80OXcwdTE3dSJ9.mRiM-3G2H5dO7agAtQ-IcQ&limit=1';

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connecto to location service.', undefined);
    } else if (!body.features.length) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const { features } = body;
      const longitude = features[0].center[0];
      const latitude = features[0].center[1];
      const placeName = features[0].place_name;

      callback(undefined, {
        latitude,
        longitude,
        placeName,
      })
    }
  })
}

module.exports = geocode;
