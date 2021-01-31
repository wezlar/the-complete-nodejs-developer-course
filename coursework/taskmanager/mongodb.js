const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('users').insertOne(
      {
        _id: id,
        name: 'Keith',
        age: '56',
      },
      (err, result) => {
        if (err) {
          return console.log('Unable to insert user');
        }

        console.log(result.ops);
      },
    );

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
