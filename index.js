// Tools
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Config DB
var configDB = require('./app/config/database');
mongoose.connect(configDB.connectionUrl);


// Express apps
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Routes
require('./app/api/post/post.routes')(app);

var server = app.listen(port, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server running at http://%s:%s',host,port)
});