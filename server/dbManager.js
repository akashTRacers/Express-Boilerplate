/* dbManager - wrapper over node-mongodb driver */
const express = require('express');
const app = express();
const logger=require('./logger');
const mongoose=require("mongoose");
//const Articles= require('../models/product');
//var path='../index.pug';

var dbManager = () => {
  const log = logger;
  console.log("inside dbmanger");
 
  mongoose.connect('mongodb://localhost:27017/beginnerbook');
let db=mongoose.connection;
    console.log(1);
//check connection
db.once('open',function(){

        console.log("connected to mongoDB");    
})

console.log(2);
//check for DB errors
db.on('error',function(err){
    console.log("Error found");
});

//Init App
const app=express();

//Bring in Models
let Articles= require('../models/article');

    Articles.find({}, function(err, results){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(results);
            
        } 
    })

 

};

module.exports = dbManager;
