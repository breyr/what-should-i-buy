const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended : true }));

app.listen(8080, () => {
  console.log('Sever is listening on port: 8080');
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.post('/submit', (req, res) => {
  let body = ''; req.on('data', function (chunk) { body += chunk; });
  req.on('end', () => {
    res.send(body) // this will change
  })
})