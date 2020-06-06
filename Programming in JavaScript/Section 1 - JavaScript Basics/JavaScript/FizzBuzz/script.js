for(var i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
      continue;
   };
   if (i % 3 === 0) {
      console.log('Fizz');
      continue;
   };
   if (i % 5 === 0) {
      console.log('Buzz');
      continue;
   }
   console.log(i)
};

// Alternative Solution:
for(i=0; i++<100;) {
   console.log(((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz')) || i);
};