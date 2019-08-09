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



//////////////////////////   HTML Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

///////////////////////////  API Get Routes

app.get("/api/tableData", function(req, res) {
    res.json(reservations);
});

app.get("/api/waitlistData", function(req, res) {
    res.json(waitlistData);
});





function Reservation(name, email, phoneNumber, id) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.id = id;
}
var reservations = [{ 
  name: "David King",
  email: "DavidKing@gmail.com",
  phoneNumber: "804-123-4567",
  id: "ThisIsDavidKing"

}];

if (reservations.length <= 5) {
    app.post("/api/tableData", function(req, res) {
        var newRes = req.body;
        newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
        console.log(newRes);
        reservations.push(newRes);
        res.json(newRes);
    })
} else {
    app.post("/api/waitlistData", function(req, res) {
        var newRes = req.body;
        newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
        console.log(newRes);
        reservations.push(newRes);
        res.json(newRes);
    })
}
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});