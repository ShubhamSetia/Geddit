const express = require('express');
const app = express();
const router =  express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
console.log(require('./routes/authentication'));
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

mongoose.connect(config.uri, {useMongoClient: true,},(err) => {
  //console.log("in here");
  if (err){
    console.log('Could not connect to database: ',err)
  }
  else{
    //console.log(config.secret)
    console.log('Connected to database: '+config.db)
  }
});//
//console.log(config.secret)
//provide static directory for frontend

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname+ '/client/dist/'));
app.use('/authentication',authentication)

//connect server to Angular2 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});
//start server;listening on port8080
app.listen(8080,() => {
  console.log('Listening on port 8080 ');
});
