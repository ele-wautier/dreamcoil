var express = require('express');
var path = require('path');
var app = express();
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

function getHomePage(req, res) {
    res.render('index.jade');
}

//routing
app.get('/', getHomePage);

var server = app.listen(7777, function() {
    console.log('express.js and jade.js is running...');
})