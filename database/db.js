const { MongoClient } = require("mongodb");
const connectionString = process.env.CONNECTION_STRING;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 100,
  wtimeoutMS: 2500,
  connectTimeoutMS: 10000,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      dbConnection = db.db("MultiuseApp");
      console.log("Successfully connected to MongoDB.");

      return callback(null,dbConnection);
    });
  },
};