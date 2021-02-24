require('../src/db/mongoose');
const { update } = require('../src/models/user');
const User = require('../src/models/user');

// User.findByIdAndUpdate('6022f847ff18a450e8f0744a', { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('6022f847ff18a450e8f0744a', 1)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
