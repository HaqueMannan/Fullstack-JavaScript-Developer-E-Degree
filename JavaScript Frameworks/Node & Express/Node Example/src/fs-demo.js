const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test'), {}, err => {
   if(err) throw err;
   console.log('Folder being created...');
});

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
   if(err) throw err;
   console.log('File being created...');
});

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' This is a new text appended!', err => {
   if(err) throw err;
   console.log('File being updated...');
});