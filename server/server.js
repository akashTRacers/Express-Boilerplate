const dbManager=require('./dbManager');

const Promise = require('bluebird');

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

let Articles= require('../models/article');

app.get('/home1',function(req,res){

    Articles.find({}, function(err, results){
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
dbManager();





