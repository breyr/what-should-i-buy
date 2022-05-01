const express = require('express')
const path = require('path')
const app = express()

app.listen(8080, () => {
  console.log('Sever is listening on port: 8080');
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})