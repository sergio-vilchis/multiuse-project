/*
	Multiuse Project main file
*/


const http = require('http');
var express = require('express'),
	apiApp = express(),
	port = 5050,
	clientApp = express(),
	portClient = 5000,
	bodyParser = require('body-parser'); //Library for API requests (server side)

	//Client Server
	clientApp.use(bodyParser.urlencoded({ extended: true }));
	clientApp.use(bodyParser.json());
	var clientServer = require('./client/index.js');
	clientServer(clientApp);
	var httpServerClient = http.createServer(clientApp);
	httpServerClient.listen(portClient);
	console.log('Client app started on: ' + portClient);

	//API Server
	apiApp.use(bodyParser.urlencoded({ extended: true }));
	apiApp.use(bodyParser.json());
	var routes = require('./server/login'); //importing login route to server
	routes(apiApp); //register the route
	var httpServer = http.createServer(apiApp);
	httpServer.listen(port);
	console.log('RESTful API server started on: ' + port);

	module.exports.apiApp = apiApp;
	module.exports.clientApp = clientApp;