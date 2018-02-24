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
  name: Number,
  email: String,
  imageUrl: String,
  adoptM:String
});

var Cat = module.exports = mongoose.model('Cat', catSchema);


var createCat = function(data){
  new Cat({
    name: data.name,
    owner: data.email,
    image: data.imageUrl,
    description: data.adpotM
    }).save().then(() => console.log("cat created"));
}



var showCats = function(callback) {
  Cat.find( function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};


module.exports.createCat = createCat;




