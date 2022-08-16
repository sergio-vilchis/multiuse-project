/*
	Multiuse Project main file
*/


const http = require('http');
let express = require('express'),
	clientApp = express(),
	portClient = 8080,
	bodyParser = require('body-parser'); //Library for API requests (server side)

//Client Server
clientApp.use(bodyParser.urlencoded({ extended: true }));
clientApp.use(bodyParser.json());
let clientServer = require('./client/index.js');
clientServer(clientApp);

//API SERVER
let routes = require('./server/login'); //importing login route to server
routes(clientApp); //register the route
let httpServerClient = http.createServer(clientApp);
httpServerClient.listen(portClient);
console.log('App started on: ' + portClient);
module.exports.clientApp = clientApp;
module.exports.apiApp = clientApp;