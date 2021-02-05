const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
// });

// const me = new User({
//   name: 'Dean',
//   age: 36,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log('Error!', err);
//   });

const Tasks = mongoose.model('Tasks', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task = new Tasks({
  description: 'Paint the walls',
  completed: false,
});

task
  .save()
  .then(() => {
    console.log(test);
  })
  .catch((err) => {
    console.log(err);
  });
