const dbManager=require('./dbManager');
const Promise = require('bluebird');
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
const path='../views/index.pug';
const initRoutes = require("../app/routes");
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

let articles= require('../app/models/article');
dbManager();

initRoutes(app);


  app.delete('/delete/:id',function(req,res){
    articles.find({ _id:id }).remove().exec();
   res.send("<H1>1 records Deleted </H1>");
  });

  app.put('/update/:id',function(req,res){
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
