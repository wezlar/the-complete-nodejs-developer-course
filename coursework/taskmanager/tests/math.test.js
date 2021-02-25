const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require('../src/math');

test('Should calculate total with tip', () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test('Should calculate total with default tip', () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test('Should convert Fahrenheit to Celsius', () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test('Should convert Celsius to Fahrenheit', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});
