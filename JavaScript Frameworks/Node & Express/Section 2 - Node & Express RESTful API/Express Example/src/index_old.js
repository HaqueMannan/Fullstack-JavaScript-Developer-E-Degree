const express = require('express');
const app = express();

app.use(express.json());

const lessons = [
   { id: 1, lesson: 'lesson 1' },
   { id: 2, lesson: 'lesson 2' },
   { id: 3, lesson: 'lesson 3' },
];

app.get('/', function(req, res) {
   res.send('Hello World!');
});

app.get('/api/lessons', function(req, res) {
   res.send(lessons);
});

app.get('/api/lessons/:id', function(req, res) {
   const lesson = lessons.find(function(l) {
      return l.id === parseInt(req.params.id);
   });

   if(!lesson) {
      res.status(404).send('The lesson ID provided was not found');
   } else {
      res.send(lesson);
   };
});

app.post('/api/lessons', function(req, res) {
   if(!req.body.lesson || req.body.lesson.length < 3) {
      res.status(400).send('The lesson is required and should be at least 3 characters long');
   } else {
      const lesson = {
         id: lessons.length + 1,
         lesson: req.body.lesson
      };
      lessons.push(lesson);
      res.send(lesson);
   };
});

app.put('/api/lessons/:id', function(req, res) {
   // Look up existing lesson
   const lesson = lessons.find(function(l) {
      return l.id === parseInt(req.params.id);
   });

   // If lesson does not exist, return a 404 error - not found
   if(!lesson) {
      res.status(404).send('The lesson ID provided was not found');
   } else if(!req.body.lesson || req.body.lesson.length < 3) {
      // Validate input, return a 400 error - bad request
      res.status(400).send('The lesson is required and should be at least 3 characters long');
   } else {
      // Update the specified lesson and return updated lesson to client in the browser
      lesson.lesson = req.body.lesson;
      res.send(lesson);
   };
});

app.delete('/api/lessons/:id', function(req, res) {
   // Look up existing lesson
   const lesson = lessons.find(function(l) {
      return l.id === parseInt(req.params.id);
   });

   // If lesson does not exist, return a 404 error - not found
   if(!lesson) {
      res.status(404).send('The lesson ID provided was not found');
   } else {
      // Delete the specified lesson and return deleted lesson to client in the browser
      const index = lessons.indexOf(lesson);
      lessons.splice(index, 1);
      res.send(lesson);
   };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
   console.log(`Running on port: ${PORT}`);
});