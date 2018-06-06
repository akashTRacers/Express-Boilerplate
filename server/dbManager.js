/* dbManager - wrapper over node-mongodb driver */
const mongoose=require("mongoose");
//const Articles= require('../models/product');
//var path='../index.pug';

var dbManager = () => {

  console.log("inside dbmanger");
 
  mongoose.connect('mongodb://localhost:27017/beginnerbook');
  
  let db=mongoose.connection;
//check connection

db.once('open',function(){
  console.log("connected to mongoDB");    
})

console.log(2);
//check for DB errors
db.on('error',function(err){
  console.log("Error found");
});

};

module.exports = dbManager;
