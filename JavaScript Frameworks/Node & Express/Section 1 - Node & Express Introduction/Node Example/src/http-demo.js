const http = require('http');
const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
   console.log('request URL: ', req.url);

   // Can only call .end() method once. Only the first .end() will display in the browser window
   // res.end('Hello World!');
   // res.end('<h1>Home Page</h1>');

   if(req.url === '/hello') {
      res.end('<h1>You have reached the Hello endpoint<h1>');
   } else {
      res.end('<h1>Home<h1>');
   };
}).listen(PORT, () => {
   console.log(`Server is running on port: ${PORT}`);
});