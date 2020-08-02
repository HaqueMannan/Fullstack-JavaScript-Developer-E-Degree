const express = require('express');
const route = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/hello', route);

app.listen(PORT, () => {
   console.log(`Listening on port: ${PORT}`);
});