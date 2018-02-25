/**
 *  This file should be a standalone script that seeds your database,
 *  making testing interactions with your database much easier.
 *
 *  You should be able to run this file from Terminal with:
 *
 *    node ./seed.js
 *
 *  And populate your database with all the data from `data.json`
 */
var fs = require('fs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

var db = mongoose.connection;



// drops exisiting colelction cats
db.collection('cats').drop();



//creates new collection of cats with data loated in data.json
var docs = fs.readFile('data.json', 'utf8', function (err, data) {
  var cats = db.collection('cats');
  console.log(data)
  cats.insert(JSON.parse(data), function (err, docs) {
    cats.count(function (err, count) {
      console.log(count + "[" + data + "]");
      db.close();
    });
  });
});