'use strict';
module.exports = function (apiApp) {
    
    apiApp.get('/login', (_req, res) => {
        res.send('Saludos desde express Login');
    });
};