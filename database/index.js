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
  name: String,
  email: String,
  image: String,
  description:String
});

var Cat = module.exports = mongoose.model('Cat', catSchema);


var createCat = function(data){
  new Cat({
    name: data.name || 'dog',
    owner: data.email || 'dog',
    image: data.image || 'dog',
    description: data.description || 'dog'
    }).save().then(() => console.log("cat created"));
}



var showCats = function(callback) {
  Cat.find( function(err, cats) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, cats);
    }
  }).limit(8)
};


module.exports.createCat = createCat;
module.exports.showCats = showCats;




