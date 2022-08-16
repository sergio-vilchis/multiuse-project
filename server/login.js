'use strict';
module.exports = function (apiApp) {

    apiApp.get('/', (_req, res) => {
        res.send('Saludos desde express Home');
    });

    apiApp.get('/login', (_req, res) => {
        res.send('Saludos desde express Login');
    });
};