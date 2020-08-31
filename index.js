//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();

 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set public folder as static folder for static file and routes
app.use('/assets',express.static(__dirname + '/public'));
app.use('/', require('./routes/index'));
app.use('/product', require('./routes/product'));
  
//server listening
app.listen(5000, () => {
  console.log('Server is running at port 5000');
});