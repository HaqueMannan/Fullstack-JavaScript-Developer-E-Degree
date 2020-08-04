const path = require('path');

console.log('basename: ', path.basename(__filename));
console.log('dirname: ', path.dirname(__filename));
console.log('extension: ', path.extname(__filename));

console.log('parse: ', path.parse(__filename));
console.log('parse: ', path.parse(__filename).base);