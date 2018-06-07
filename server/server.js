const dbManager=require('./dbManager');

const Promise = require('bluebird');
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
var path='../views/index.pug';

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

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

let articles= require('../models/article');

dbManager();

app.get('/about',function(req,res){

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

app.use(bodyParser.urlencoded({extended: true}))
  

app.post('/insert',function(req,res){
  console.log(req.body)
   
  let article1 = new articles(req.body);

   article1.save((err, result) => {
       if (err) throw err;
       console.log("saved to database");
       res.send("<H1>1 records inserted </H1>");
       //alert("one Rocord inserted");
       res.redirect('/')
   });
  
  }); 

  app.get('/delete',function(req,res){
    articles.find({ author:'shivam' }).remove().exec();
   res.send("<H1>1 records Deleted </H1>");
  });

  app.get('/update/:id',function(req,res){
      var id=req.params.id;
      articles.findOne({_id:id}, function(err,foundObject){
      if(err)
      {
        console.log(err);
        res.status(500).send();

      }
      else{
        if(!foundObject)
        {
          res.status(400).send();
        }
        else{
          foundObject.author= "Eminson";

        }
        foundObject.save(function(err,updatedObject){
            if(err)
            {
              console.log(err);
              res.status(500).send();
            }
            else{
              res.send(updatedObject);
            }

        });
      }


    })
    
    /*Contact.update({_id: id},{$set: { author: "Adams"}}, contact, {upsert: true}, 
      function(err){} )*/
    res.send("<H1>1 record updated </H1>");
    });
 
  

  //Contact.update({phone:request.phone}, {$set: { phone: request.phone }}, {upsert: true}, function(err){...})
