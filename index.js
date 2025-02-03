const connectToMongo = require('./db');
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
connectToMongo();

const app = express()
app.use(cors());
app.use(cookieParser())
app.use(express.json()) //middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({ exposedHeaders: ['auth-token'] }));

// Listen for Mongoose events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});



// Available routes
app.use('/notebook/auth',require('./routes/auth'))
app.use('/notebook/notes',require('./routes/notes'))

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
