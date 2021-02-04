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

    // const updatePromise = db.collection('users').updateOne(
    //   {
    //     _id: new ObjectID('6016e3ef57146ede33926441'),
    //   },
    //   {
    //     $set: {
    //       name: 'Marley',
    //     },
    //   },
    // );

    // const updatePromise = db.collection('users').updateOne(
    //   {
    //     _id: new ObjectID('6016e7de09149cdfac73a367'),
    //   },
    //   {
    //     $inc: {
    //       age: 1,
    //     },
    //   },
    // );

    const updatePromise = db.collection('tasks').updateMany(
      { completed: false },
      {
        $set: {
          completed: true,
        },
      },
    );

    updatePromise
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
);
