import { app, path } from "../../server";

app.get("/", function (req, res) {
    // Path to home page
    res.sendFile(path.join(__dirname, "app/public/home.html"));

});

app.get("/survey", function (req, res) {
    //Path to survey
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});




