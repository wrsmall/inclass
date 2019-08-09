var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();
var fs = fs;
var PORT = process.env.PORT || 3000;
var path = path;
// var PORTTWO = process.env.PORT|| 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function Reservation(name, email, phoneNumber, id) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.id = id;
}

//////////////////////////    Data arrays
var reservations = [];

var waitlist = [];

//////////////////////////    Exporting data arrays
module.exports = reservations, waitlist;

//////////////////////////    Routers
require("./routesHTML")(app);
require("./routesAPI")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});