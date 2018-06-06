const dbManager=require('./dbManager');

const Promise = require('bluebird');

//Load View Engine 
var path=__dirname +"/index.pug";

// custom logger
const log = require('./logger.js');
const express = require('express');
const app = express();

// serves all static files in /public
app.use(express.static(`${__dirname}/../public`));
const port = process.env.PORT || 8002;
const server = require('http').Server(app);



// start server
server.listen(port, () => {
 
  log.info(`Listening on port ${port}`);
});

// 'body-parser' middleware for POST
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  res.send(`welcome, ${req.body.username}`);
});

// POST /api/users gets JSON bodies

app.post('/api/users', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  // create user in req.body
});
console.log("level 1");
dbManager();





