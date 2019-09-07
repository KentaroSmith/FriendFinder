var api = app.get("/api/friends", function (req, res) {
    res.json(friends)
})

module.exports = { api }