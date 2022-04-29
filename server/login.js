'use strict';
module.exports = function (app) {

    app.get('/', (_req, res) => {
        res.send('Saludos desde express');
    });

    app.get('/login', (_req, res) => {
        res.send('Saludos desde express Danya');
    });
};