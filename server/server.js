const dbManager=require('./dbManager');

const Promise = require('bluebird');
const mongoose=require("mongoose");
var path='../index.pug';

// custom logger
const express = require('express');
const app = express();

// serves all static files in /public
app.use(express.static(`${__dirname}/../public`));
const port = process.env.PORT || 8002;
const server = require('http').Server(app);

app.set("view engine", "pug");


// start server
server.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// 'body-parser' middleware for POST
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

let articles= require('../models/article');

dbManager();

app.get('/view',function(req,res){

    articles.find({}, function(err, results){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(results);
            res.render(path,{
              title:'Articles',
              articles1:results
      
          });
        } 
    })

  });

app.get('/insert',function(req,res){
     let article1 = new articles({title: 'Intro to Mongodb', author: 'shivam', body: 'It is NOSQL database'});

   article1.save((err, result) => {
       if (err) throw err;
       console.log("1 records inserted");
       res.send("<H1>1 records inserted </H1>");
   });
  }); 

 