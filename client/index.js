'use strict';
module.exports = function (clientApp) {
    let contentTypeHtml = "text/html";
    let mainFolder = "client/front-end";
    const fs = require('fs').promises;

    clientApp.get('/', (_req, res) => {
        fs.readFile(mainFolder+"/index.html")
        .then(contents => {
            res.setHeader("Content-Type", contentTypeHtml);
            res.writeHead(200);
            res.end(contents);
        })
    });
};