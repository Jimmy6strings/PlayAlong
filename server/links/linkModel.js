var mongoose = require('mongoose');

var LinkSchema = new mongoose.Schema({
  title: String,
  url: String,
  baseUrl: String
});

module.exports = mongoose.model('Link', LinkSchema);