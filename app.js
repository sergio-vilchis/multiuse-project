/*
	Multiuse Project main file
*/

//Imports
if (process.env.NODE_ENV !== 'Production' && process.env.NODE_ENV !== 'Development') {
	require('dotenv').config();
}
const http = require('http');
const db = require('./database/db');

//Express init
let express = require('express'),
	clientApp = express(),
	portClient = process.env.PORT,
	bodyParser = require('body-parser'); //Library for API requests (server side)
	clientApp.use(bodyParser.urlencoded({ extended: true }));
	clientApp.use(bodyParser.json());

//Client Server
let clientServer = require('./client/index.js');


//API SERVER
let routes = require('./server/recipe'); //importing recipe route to server

function initServer(){
	//Database initialization
	return db.connectToServer(function(err,dbo){
		clientServer(clientApp); //register webapp
		routes(clientApp,dbo); //register the route
		//Server init
		let httpServerClient = http.createServer(clientApp);
		httpServerClient.listen(portClient);
		console.log('App started on: ' + portClient);
	});
}

//Modules export
module.exports.clientApp = clientApp;
module.exports.apiApp = clientApp;
module.exports.initServer = initServer()