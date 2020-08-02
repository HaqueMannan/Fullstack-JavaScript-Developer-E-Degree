const express = require('express');
const app = express();
const hello = require('./hello.js');

app.get('/hello', function(req,res) {
   res.send('hello from index.js');
});

console.log(hello);

app.listen(3000);