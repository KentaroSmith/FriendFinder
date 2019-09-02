var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
});









app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
