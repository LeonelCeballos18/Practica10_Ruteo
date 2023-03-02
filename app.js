const express = require('express')
const app = express()

let port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html><html lang="en"><head></head><body><h1>Hello world!</h1></body></html>`)
})

app.get('/api', function (req, res) {
  res.json({firstname: 'Jonh', lastname: 'Doe'});
})

app.get('/person/:id', function (req, res) {
  res.send('<!DOCTYPE html><html lang="en"><head></head><body><h1>Person: ' + req.params.id +'</h1></body></html>')
})

app.listen(port)