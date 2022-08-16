/*
	Multiuse Project main file
*/


const http = require('http');
var express = require('express'),
	clientApp = express(),
	portClient = 5000,
	bodyParser = require('body-parser'); //Library for API requests (server side)

	//Client Server
	clientApp.use(bodyParser.urlencoded({ extended: true }));
	clientApp.use(bodyParser.json());
	var clientServer = require('./client/index.js');
	clientServer(clientApp);
	//API SERVER
	var routes = require('./server/login'); //importing login route to server
	routes(clientApp); //register the route
	var httpServerClient = http.createServer(clientApp);
	httpServerClient.listen(portClient);
	console.log('App started on: ' + portClient);
	module.exports.clientApp = clientApp;
	module.exports.apiApp = clientApp;