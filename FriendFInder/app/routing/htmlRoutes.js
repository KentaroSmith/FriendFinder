

var home = app.get("/", function (req, res) {
    // Path to home page
    res.sendFile(path.join(__dirname, "app/public/home.html"));

});

var survey = app.get("/survey", function (req, res) {
    //Path to survey
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});



module.exports = { home, survey }
