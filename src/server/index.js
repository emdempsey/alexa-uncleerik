var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var env = process.env.NODE_ENV || 'dev';
var config = { port: process.env.PORT || 3000 };

var app = express();

// we need the body parser so we can get at the POST body that Amazon sends
app.use(bodyParser.json());
require('./routes-prod').configure(app);

app.use("/alexa/tools", express.static("node_modules/utterance-builder-gui/www"));

var audioFolder = path.resolve(__dirname + "/../audio");
app.use("/audio",express.static(audioFolder));

// Start the web server on the specified port
app.listen(config.port, process.env.IP, function() {
    console.log("Server running on port " + config.port)
});

