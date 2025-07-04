const mongoose = require('mongoose');

// define the mongoDb connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels'

// set up mogodb connection
mongoose.connect('mongodb://localhost:27017/hotels');

//this is depricated
// mongoose.connect(mongoURL,{
//     useNewUrlParser: true, // must code
//     useUnifiedtopology: true // must code
// })

//get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection

const db = mongoose.connection; // this obejct is used to handle events and interact with the databse

// define event listeners for database connection
//  'connected', 'error', 'disconnected' these are default words which db understands on its own
db.on('connected',()=>{
    console.log('connected to MongoDB server');
});
db.on('error',(err)=>{
    console.error('MongoDB connection error:', err);
});
db.on('close',()=>{
    console.log('MongoDB disconnected');
});
db.on('reconnectFailed', () => {
  console.error('MongoDB reconnection failed');
});

// export the databse connection
module.exports = db;