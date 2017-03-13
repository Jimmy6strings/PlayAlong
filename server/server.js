var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/shortly');

app.get('/', function (req, res) {
  res.send(__dirname + '/client/index.html')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('PlayAlong app listening on port 3000!')
})