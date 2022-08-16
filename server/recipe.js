'use strict';
module.exports = function (apiApp,dbConnect) {
    
    apiApp.get('/recipe', (_req, res) => {
        dbConnect.collection("Recipe").find({}).toArray(function (err, result){
            let objResponse = {
                recipes: result
            };
            return res.status(200).json(objResponse);
        })
    });

};