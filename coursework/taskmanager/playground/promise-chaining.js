require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('6022f847ff18a450e8f0744a', { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
