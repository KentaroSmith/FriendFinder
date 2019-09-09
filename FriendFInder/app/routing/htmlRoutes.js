var path = require("path")

module.exports = function (app) {
    app.get("/", function (req, res) {
        // Path to home page
        res.sendFile(path.join(__dirname, "../public/home.html"));

    });
    app.get("/survey", function (req, res) {
        //Path to survey
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}


