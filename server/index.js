"use strict";

// Basic express setup:

const PORT              = 8080;
const express           = require("express");
const bodyParser        = require("body-parser");
const app               = express();
const MongoClient       = require('mongodb').MongoClient;
const makeDatahelpers   = require("./lib/data-helpers.js");
const getRoutes         = require("./routes/tweets");
const MONGODB_URI       = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

MongoClient.connect(MONGODB_URI, (err, db) => {
  if(err) throw err;

  const DataHelpers = makeDatahelpers(db);

  // The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
  // so it can define routes that use it to interact with the data layer.
  const tweetsRoutes = getRoutes(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});



