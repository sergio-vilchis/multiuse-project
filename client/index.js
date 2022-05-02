'use strict';
module.exports = function (clientApp) {
    var contentTypeHtml = "text/html";
    var mainFolder = "client/front-end";
    const fs = require('fs').promises;

    clientApp.get('/', (req, res) => {
        fs.readFile(mainFolder+"/index.html")
        .then(contents => {
            res.setHeader("Content-Type", contentTypeHtml);
            res.writeHead(200);
            res.end(contents);
        })
    });
};