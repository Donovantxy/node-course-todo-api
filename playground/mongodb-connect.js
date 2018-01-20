const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj, obj.getTimestamp());

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
    if (err) return console.log('Unable to connect to the database', err);
    console.log('Connected to the database:', db.databaseName);
    let collection = db.collection('Users');
    // let collection = db.collection('Todos');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert a doc', err);
    //     console.log('Inserted a doc:', JSON.stringify(result.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Elisa',
    //     age: 30,
    //     location: 'London'
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert a doc: ', err);
    //     console.log('RESULT ', JSON.stringify(result.ops, undefined, 2));
    // });

    // collection.find({ name: 'Fulvio' }).toArray()
    // collection.find({ completed: true }).toArray()
    //     .then((docs) => {
    //         // console.log(docs);
    //         docs.forEach((user, i) => {
    //             console.log('\n', i, user._id.getTimestamp());
    //             console.log(JSON.stringify(user, undefined, 3));
    //         });
    //         db.close();
    //     });

    // collection.find({ name: 'Fulvio' }).toArray((err, arr) => {
    // collection.find({ name: 'Fulvio' }).toArray((err, arr) => {
    collection.find({ age: { $lte: 31 } }).toArray((err, arr) => {
        if (err) return err;
        console.log(JSON.stringify(arr, undefined, 2));
    });
    console.log('\n', '=========================================', '\n');
    collection.find({ age: { $gte: 31 } }).count().then(res => {//.toArray().then(res => {
        console.log(res);
    }, err => { console.log(err) });

    // collection.find().explain((err, explaination) => {
    //     console.log(explaination);
    //     db.close();
    // });
    db.close();
});
