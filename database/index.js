var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var catSchema = mongoose.Schema({
  catage: Number,
  description: String
});

var Cat = mongoose.model('Cat', catSchema);



