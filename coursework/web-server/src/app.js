const express = require('express');

const app = express();

// possible routes
// app.com \
// app.com/help
// app.com/about

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
  res.send({
    name: 'Dean',
    age: 36,
  });
});

app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>');
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
