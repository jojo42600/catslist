var express = require('express');
var bodyParser = require('body-parser');

 var cats = require('../database/index.js');

var app = express();


 app.use(express.static(__dirname + '/../dist'));




app.listen(3000, function() {
  console.log('listening on port 3000!');
});
