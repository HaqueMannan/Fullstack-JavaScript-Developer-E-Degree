const express = require('express');
const app = express();
const hello = require('./hello');
var PORT = process.env.PORT || 3000;

app.use('/hello', function(req, res, next) {
   console.log('A new request was received at ' + Date.now());
   next();
});

app.get('/hello', function(req,res) {
   res.send(hello);
});

app.get('/example', function(req, res) {
   res.send('Hello from the example route');
});

app.get('/example/b', function(req, res) {
   res.send('Hello from sub route B!');
});

app.get('/example/c', function(req, res) {
   res.send('Hello from sub route C!');
});

var callbackOne = function(req, res, next) {
   console.log('callbackOne');
   next();
};

var callbackTwo = function(req, res, next) {
   console.log('callbackTwo');
   next();
};

var callbackThree = function(req, res, next) {
   console.log('callbackThree says hello from route C!');
   res.send('callback triggered');
};

app.get('/example/d', 
   function(req, res, next) {
      console.log('The response will be sent by the next function...');
      next();
   },
   function(req, res) {
      res.send('Hello from D!');
   }
);

app.get('/example/c/withmiddleware', [callbackOne, callbackTwo, callbackThree]);

app.listen(PORT, () => {
   console.log(`Listening on port: ${PORT}`);
});