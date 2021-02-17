const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('The site is un maintenance. Please check back later.');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('602c34abf1b23f2165de7dd2');
  // await task.populate('owner').execPopulate();
  // console.log(task);

  const user = await User.findById('60299124f047ec21367cb750');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

// main();
