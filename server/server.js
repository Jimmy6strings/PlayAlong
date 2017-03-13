var express = require('express');
var mongoose = require('mongoose');
var app = express()

mongoose.connect('mongodb://localhost/shortly');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(27017, function () {
  console.log('PlayAlong app listening on port 27017!')
})