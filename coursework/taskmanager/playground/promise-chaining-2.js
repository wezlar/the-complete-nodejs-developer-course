require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('602056832537d725265b248b')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
