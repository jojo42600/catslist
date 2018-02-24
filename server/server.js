var express = require('express');
var bodyParser = require('body-parser');

var cats = require('../database/index.js');

var app = express();


 app.use(express.static(__dirname + '/../dist'));






app.get('/api/displayCats', function (req, res) {
  cats.showCats(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.post('/api/newCatListing', function (req, res){
  cats.createCat(req.body);
  console.log(req.body)
  res.sendStatus(200);
})





app.listen(3000, function() {
  console.log('listening on port 3000!');
});
