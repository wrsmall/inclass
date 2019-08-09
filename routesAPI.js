var reservations = require('./reservations');
var waitlist = require('./waitlist');

//////////////////////////    API Routes

module.exports = function(app) {
    app.get("/api/tableData", function(req, res) {
        res.json(reservations);
    });

    app.get("/api/waitlistData", function(req, res) {
        res.json(waitlist);
    });

    app.post("/api/tableData", function(req, res) {

        var newRes = req.body;
        if (reservations.length < 5) {
            reservations.push(newRes);
            res.send(true);
        } else {
            waitlist.push(newRes);
            res.send(false);
        }
    })
};