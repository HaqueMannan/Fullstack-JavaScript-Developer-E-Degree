const express = require('express');
const app = express();

app.get('/', function(req, res) {
   res.send('Hello World!');
});

app.get('/api/lessons', function(req, res) {
   res.send([4, 5, 6, 7]);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
   console.log(`Running on port: ${PORT}`);
});