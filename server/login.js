'use strict';
module.exports = function (app) {

    let usuario = {
        nombre: '',
        apellido: ''
    }

    let respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    }

    app.get('/', (req, res) => {
        res.send('Saludos desde express');
    });
};