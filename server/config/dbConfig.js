const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDB successfully connected');
});

connection.on('error', (err) => {
    console.log('MongoDB connection failed');
    console.error(err); // Print the error for debugging purposes
});

module.exports = connection;