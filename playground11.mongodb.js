use('admin'); // or just use admin in Mongo shell

// Optional: create the collection (but not needed as insertMany creates it automatically if it doesn't exist)
db.createCollection('example');

// Now insert the documents
db.example.insertMany([
  {
    "number": 12,
    "colour": "red",
    "shape": "circle"
  }
]);

// You can confirm it worked:
db.example.find();
