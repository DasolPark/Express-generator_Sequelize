const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello express');
})

app.listen(3033, () => {
  console.log("hi I'm 3033");
})

module.exports = app;