const express = require('express');
const router = express.Router();

// SCHEMAS
const Movie = require('../models/movie.js');

// ROUTES
router.get('/', async (req, res) => {
   try {
      const movies = await Movie.find();
      res.json(movies);
   } catch(err) {
      res.status(500).json({ message: err.message });
   };
});

router.get('/:id', (req, res) => req.params.id);

router.post('/', async (req, res) => {
   const movie = new Movie({
      movieDirector: req.body.movieDirector,
      movieTitle: req.body.movieTitle
   });

   try{
      const newMovie = await movie.save();
      res.status(201).json(newMovie);
   } catch(err) {
      res.status(400).json({ message: err.message });
   };
});

// EXPORT ROUTER
module.exports = router;