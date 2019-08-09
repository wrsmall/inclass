var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();
var fs = fs;
var PORT = process.env.PORT || 3000;
var path = path;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//////////////////////////   Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});



function Reservation(name, email, phoneNumber, id) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.id = id;
}
var reservations = [{

}];

if (reservations.length <= 5) {
    app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "add.html"));
    });
} else {
    app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "waitlist.html"));
    });
}

<<<<<<< HEAD
app.post("/api/tableData", function(req, res){
  var newRes = req.body;
  newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
  console.log(newRes);
  reservations.push(newRes);
  res.json(newRes);
=======
app.post("/tableData", function(req, res) {
    var newRes = req.body;
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
    console.log(newRes);
    reservations.push(newRes);
    res.json(newRes);
>>>>>>> 0d3fcabf83e9d25f8a1909d28221056d16604147
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});