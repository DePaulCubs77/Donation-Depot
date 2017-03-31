// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

// Using es6 promise
mongoose.Promise = Promise;

// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Charity = require("./models/Charity.js");
var Comment = require("./models/Comment.js");


// use express
var app = express();
var PORT = process.env.PORT || 8888; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect('mongodb://localhost/thedonation6');
//mongoose.connect('mongodb://heroku');

var db = mongoose.connection;


db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

 // we need to explicitly tell express to send anyone who goes to / route to open index.html
  app.get("/", function(req, res) {
      res.sendFile(__dirname + "/public/app.html");
   });

// Routes

app.post("/add-charity", function(req, res) {
  console.log("got to add charity");
  console.log(req.body);
  
   var charity =  new Charity(req.body);
    charity.save(function(err,doc){
        if (err){
          console.log(err);
        }
        res.json(doc);
      }
    )
  
});

app.post("/add-comment", function(req, res) {
  console.log("got to add comment",req.body);
   
   var comment =  new Comment(req.body);
    comment.save(function(err,doc){
        if (err){
          console.log(err);
        }
        res.json(doc);
      }
    )

  });
  


app.get("/item/:itemname?", function(req, res) {
  console.log("got to find charity",req.query);  
 // Charity.findOne({itemname: req.params.itemname}) 
Charity.find({itemname: req.query.itemname})
      // Execute the above query
      .exec(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        else {
          // Or send the document to the browser
          res.json(doc);
          console.log("got to find charity",doc);
        }
      });
  });


app.get("/get-comment", function(req, res) {
  console.log("got to find comments",req.query);
  
Comment.find({ })
      // Execute the above query
      .exec(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        else {
          // Or send the document to the browser
          res.json(doc);
        }
      });


  });

    // let the server take requests
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
