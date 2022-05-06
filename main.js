/*
	Multiuse Project main file
*/



var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	clientApp = express(),
	portClient = process.env.PORT || 3001,
	bodyParser = require('body-parser'); //Library for API requests (server side)

	// HTTPS support
	var https = require('https');
	var fs = require('fs');
	var privateKey  = fs.readFileSync('sslcert/multiuseapp.key', 'utf8');
	var certificate = fs.readFileSync('sslcert/multiuseapp.crt', 'utf8');
	var credentials = {key: privateKey, cert: certificate};

	//Client Server
	clientApp.use(bodyParser.urlencoded({ extended: true }));
	clientApp.use(bodyParser.json());
	var clientServer = require('./client/index.js');
	clientServer(clientApp);
	var httpsServerClient = https.createServer(credentials, clientApp);
	httpsServerClient.listen(portClient);
	console.log('Client app started on: ' + portClient);

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	var routes = require('./server/login'); //importing login route to server
	routes(app); //register the route
	var httpsServer = https.createServer(credentials, app);
	httpsServer.listen(port);
	console.log('RESTful API server started on: ' + port);

	module.exports.app = app;
	module.exports.clientApp = clientApp;