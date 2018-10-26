// Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Setup Express
const app = express();
let PORT = process.env.port || 3000;

// Express data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
let htmlRoutes = require("./app/routing/htmlRoutes")
htmlRoutes(app, path);

let apiRoutes = require("./app/routing/apiRoutes")
apiRoutes(app);

// Starts server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
