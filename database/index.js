var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var catSchema = mongoose.Schema({
  name: String,
  owner: String,
  image: String,
  description: String
});

var Cat = module.exports = mongoose.model('Cat', catSchema);

// add new item to database
var createCat = function (data) {
  new Cat({
    name: data.name,
    owner: data.owner,
    image: data.image,
    description: data.description
  }).save().then(() => console.log("cat created"));
}


//retreive a list of 20 from database
var showCats = function (callback) {
  Cat.find(function (err, cats) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, cats);
    }
  }).limit(20)
};


module.exports.createCat = createCat;
module.exports.showCats = showCats;