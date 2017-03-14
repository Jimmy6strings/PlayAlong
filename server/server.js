var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/../client'))
console.log('this is directory name' + __dirname);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/shortly');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
})

app.listen(process.env.PORT || 27017, function () {
  console.log('PlayAlong app listening on port 27017!')
})

module.exports = app;