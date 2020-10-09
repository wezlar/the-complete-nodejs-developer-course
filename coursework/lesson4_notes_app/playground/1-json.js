const fs = require('fs');
const filename = '1-json.json';

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

const newData = JSON.stringify({
  ...data,
  name: 'Dean',
  age: '36',
});

fs.writeFileSync(filename, newData);
