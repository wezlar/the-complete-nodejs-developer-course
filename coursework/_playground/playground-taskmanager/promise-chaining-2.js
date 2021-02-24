require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('602056832537d725265b248b')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

deleteTaskAndCount('601db70335f34779fad1af3b')
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
