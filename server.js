var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function Reservation(name, email, phoneNumber, id) {
//     this.name = name;
//     this.email = email;
//     this.phoneNumber = phoneNumber;
//     this.id = id;
// }

//////////////////////////    Routers
require("./routesHTML")(app);
require("./routesAPI")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});