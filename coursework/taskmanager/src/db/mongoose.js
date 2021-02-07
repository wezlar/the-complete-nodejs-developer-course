const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// const me = new User({
//   name: 'Dean Pugh',
//   email: 'deanpugh@DEANPUGH.com',
//   password: 'phone098!',
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
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// const task = new Tasks({
//   description: 'Paint the walls',
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
