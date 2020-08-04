const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('Listener', function(){
   console.log('Listener has been called');
});

emitter.emit('Listener');

emitter.on('HelloWorld', function(){
   console.log('HelloWorld has has been called');
});

emitter.emit('HelloWorld');

//-------------------------------------------------
// Event Chaining
//-------------------------------------------------
// Could be creating a new user
emitter.on('FirstEvent', function(data){
   console.log('FirstEvent has been triggered');
   emitter.emit('SecondEvent');
});
// Could save the new user to the database
emitter.on('SecondEvent', function(data){
   console.log('SecondEvent has been triggered');
   emitter.emit('ThirdEvent');
});
// Could trigger functionality to reflect this change in the browser
emitter.on('ThirdEvent', function(data){
   console.log('ThirdEvent has been triggered');
});

emitter.emit('FirstEvent');