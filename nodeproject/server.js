var express = require('express');
var bodyparser = require('body-parser');

var cors = require('cors')

  
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
  
var server = app.listen(3001, function() {
  console.log('Server listening on port ' + server.address().port);
});
module.exports = app;
var connection = require('./Dbconnection');
var routes = require('./routes');

app.use('/',routes); 

//Tránh bị chặn bởi chính sách
app.use(cors())
//  app.listen(3001, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })