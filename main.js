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
	var ca = fs.readFileSync('../sslcert/multiuseapp_ddns_net.pem-chain', {encoding:'utf8'});
	let options = {
		cert: fs.readFileSync('../sslcert/multiuseapp_ddns_net.pem', {encoding:'utf8'}),
		key: fs.readFileSync('../sslcert/multiuseapp.key', {encoding:'utf8'}),
		ca: ca.split('-----END CERTIFICATE-----\r\n') .map(cert => cert +'-----END CERTIFICATE-----\r\n')
	}

	//Client Server
	clientApp.use(bodyParser.urlencoded({ extended: true }));
	clientApp.use(bodyParser.json());
	var clientServer = require('./client/index.js');
	clientServer(clientApp);
	var httpsServerClient = https.createServer(options, clientApp);
	httpsServerClient.listen(portClient);
	console.log('Client app started on: ' + portClient);

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	var routes = require('./server/login'); //importing login route to server
	routes(app); //register the route
	var httpsServer = https.createServer(options, app);
	httpsServer.listen(port);
	console.log('RESTful API server started on: ' + port);

	module.exports.app = app;
	module.exports.clientApp = clientApp;