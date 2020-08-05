const express = require('express');
const app = express();

app.get('/', function(req, res) {
   res.send('Hello World!');
});

app.get('/api/lessons', function(req, res) {
   res.send([4, 5, 6, 7]);
});

app.get('/api/movie/:id', function(req, res) {
   res.send(req.params.id);
});

app.get('/api/movies/:year/:title', function(req, res) {
   // res.send(req.params);
   res.send(req.query);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
   console.log(`Running on port: ${PORT}`);
});