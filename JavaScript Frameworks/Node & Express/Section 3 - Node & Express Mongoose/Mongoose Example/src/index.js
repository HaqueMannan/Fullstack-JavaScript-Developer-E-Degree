const express = require('express');
const mongoose = require('mongoose');
const moviesRouter = require('./routes/movies.js');

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/movies'

// MONGOOSE CONNECTION TO MONGODB
mongoose.connect(DATABASE_URL, {
   useUnifiedTopology: true,
   useNewUrlParser: true,
}).then(() => console.log('Connected to Database!')).catch(err => {console.log(`DB Connection Error: ${err.message}`);});

// USE ROUTE HANDLER
app.use(express.json());
app.use('/movies', moviesRouter);

// RUN SERVER
app.listen(PORT, function() {
   console.log(`Running on port: ${PORT}`);
});