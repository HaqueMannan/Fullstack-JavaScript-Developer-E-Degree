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

router.get('/:id', getMovie, (req, res) => res.json(res.movie));   // Return the whole object
// router.get('/:id', getMovie, (req, res) => res.json(res.movie.movieTitle));   // Return single specific property
// router.get('/:id', getMovie, (req, res) => res.json({ director: res.movie.movieDirector, title: res.movie.movieTitle }));   // Return multiple specific properties as new object

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

// MIDDLEWARE
async function getMovie(req, res, next) {
   let movie;
   try {
      movie = await Movie.findById(req.params.id);
      if(movie == null) {
         return res.status(404).json({ message: 'Cannot find movie.' })
      };
   } catch(err) {
      return res.status(500).json({ message: 'The id selected was not found.' });
   };
   res.movie = movie;
   next();
};

// EXPORT ROUTER
module.exports = router;