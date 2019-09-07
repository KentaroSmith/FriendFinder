const express = require("express");
const path = require("path");
var friends = require("./app/data/friends.js");
var app = express();
const PORT = process.env.PORT || 3000;

//data parsing 
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

//path for json file
app.get("/api/friends", function (req, res) {
    res.json(friends)
})


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
