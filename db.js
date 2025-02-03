require('dotenv').config();
const mongoose = require('mongoose');
const mstring = process.env.STRING_URL
const mongoURL = mstring; // mongodb connection string which is used to connect with database

const dbName = 'notebook'
const connectToMongo = async () => {
   const response = await mongoose.connect(`${mongoURL}${dbName}`)
   console.log(response.connection.host)
}

module.exports = connectToMongo;