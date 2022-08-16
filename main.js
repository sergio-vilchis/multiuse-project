/*
	Multiuse Project main file
*/


const http = require('http');
var express = require('express'),
	app = express(),
	port = process.env.PORT || 8081,
	clientApp = express(),
	portClient = process.env.PORT || 8080,
	bodyParser = require('body-parser'); //Library for API requests (server side)

	//Client Server
	clientApp.use(bodyParser.urlencoded({ extended: true }));
	clientApp.use(bodyParser.json());
	var clientServer = require('./client/index.js');
	clientServer(clientApp);
	var httpServerClient = http.createServer(clientApp);
	httpServerClient.listen(portClient);
	console.log('Client app started on: ' + portClient);

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	var routes = require('./server/login'); //importing login route to server
	routes(app); //register the route
	var httpServer = http.createServer(app);
	httpServer.listen(port);
	console.log('RESTful API server started on: ' + port);

	module.exports.app = app;
	module.exports.clientApp = clientApp;