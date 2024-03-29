const express = require("express");
const path = require("path");
var app = express();
const PORT = process.env.PORT || 3000;

//data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
