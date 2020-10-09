const http = require('http');

const url =
  'http://api.weatherstack.com/current?access_key=6eead8b948e58809d57f8dcbea84be21&query=45,-75&unit=m';

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString(); // converting buffer to a string
    console.log(chunk);
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();
