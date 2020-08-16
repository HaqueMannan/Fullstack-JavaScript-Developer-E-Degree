const express = require('express');
const mongoose = require('mongoose');
const moviesRouter = require('./routes/movies.js');

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/movies'

// SERVE INDEX.HTML ON ROOT ROUTE
app.use(express.static('src/public'));

// MONGOOSE CONNECTION TO MONGODB
mongoose.connect(DATABASE_URL, {
   useUnifiedTopology: true,
   useNewUrlParser: true,
}).then(() => console.log('Connected to Database!')).catch(err => {console.log(`DB Connection Error: ${err.message}`);});

// USE ROUTE HANDLER
app.use(express.json());
app.use('/movies', moviesRouter);

// RUN SERVER
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));