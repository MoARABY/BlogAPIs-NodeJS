const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = async () => {
const db_conn=await mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Connected to MongoDB');})
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });
}

module.exports = dbConnection;