const express = require('express');
const app = express();
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
   console.log(`Running on port: ${PORT}`);
});