// Object property shorthand

const name = 'Dean';
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: 'Eastbourne',
};

console.log(user);

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: productLabel, stock, rating } = product;

console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
}

transaction('order', product);
