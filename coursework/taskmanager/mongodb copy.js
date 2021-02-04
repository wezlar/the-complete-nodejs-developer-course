const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('users').findOne({ name: 'Dean', age: 1 }, (err, user) => {
      if (err) {
        return console.log('Unable to fetch user');
      }

      console.log(user);
    });

    db.collection('users').findOne(
      { _id: new ObjectID('6016e7de09149cdfac73a366') },
      (err, user) => {
        console.log('Users findOne using id');
        if (err) {
          return console.log('Unable to fetch user');
        }

        console.log(user);
      },
    );

    db.collection('users')
      .find({ age: 33 })
      .toArray((err, users) => {
        console.log('Users find toArray age of 33');
        console.log(users);
      });

    db.collection('users')
      .find({ age: 33 })
      .count((err, count) => {
        console.log('Users find count age of 33');
        console.log(count);
      });

    db.collection('tasks').findOne(
      { _id: new ObjectID('6016e9113512d7e020289431') },
      (err, task) => {
        console.log('Finding tasks');
        if (error) {
          return console.log('Task not found');
        }

        console.log(task);
      },
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((err, tasks) => {
        console.log('Uncompleted tasks');
        console.log(tasks);
      });

    // db.collection('users').insertOne(
    //   {
    //     _id: id,
    //     name: 'Keith',
    //     age: '56',
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   },
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Helen',
    //       age: 33,
    //     },
    //     {
    //       name: 'Owen',
    //       age: 6,
    //     },
    //     {
    //       name: 'Miley',
    //       age: 1,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //   },
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Plaster wall',
    //       completed: false,
    //     },
    //     {
    //       description: 'Sand down wall',
    //       completed: true,
    //     },
    //     {
    //       description: 'Paint wall',
    //       completed: false,
    //     },
    //   ],
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert tasks!');
    //     }

    //     console.log(result.ops);
    //   },
    // );
  },
);
