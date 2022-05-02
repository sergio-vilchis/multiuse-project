/*
	Multiuse Project main file
*/



var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	clientApp = express(),
	portClient = process.env.PORT || 3001,
	bodyParser = require('body-parser'); //Library for API requests (server side)

	//Client Server
	clientApp.use(bodyParser.urlencoded({ extended: true }));
	clientApp.use(bodyParser.json());
	var clientServer = require('./client/index.js');
	clientServer(clientApp);
	clientApp.listen(portClient);
	console.log('Client app started on: ' + portClient);

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	var routes = require('./server/login'); //importing login route to server
	routes(app); //register the route
	app.listen(port);
	console.log('RESTful API server started on: ' + port);
	var coso = "";
	var coso2 = "";

	module.exports.app = app;
	module.exports.clientApp = clientApp;