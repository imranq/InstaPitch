var http = require('http');
var path = require('path');
var express = require('express');
var session = require('express-session')
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectId
var MongoClient = mongodb.MongoClient;
var localhost_uri = "mongodb://localhost:27017/instapitch";

var 

server.listen(port, function() {
	console.log("InstaPitch started on port "+(process.env.PORT || 3000));	
});