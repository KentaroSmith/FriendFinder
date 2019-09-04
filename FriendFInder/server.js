const express = require("express");
const path = require("path");

var app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    // Path to home page
    res.sendFile(path.join(__dirname, "app/public/home.html"));

});

app.get("/survey", function (req, res) {
    //Path to survey
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});




app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
