var express = require('express');
var path = require('path');
var app = express();
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});
app.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(3000);

console.log("Running at Port 3000");