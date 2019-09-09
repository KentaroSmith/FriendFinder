var friends = require("../data/friends")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        var scores = newFriend.scores;
        var sum = 0;
        for (var i = 0; i < 10; i++) {
            sum += parseInt(scores[i])
        }
        console.log("Total Score =" + sum)
        //added in score calc to find new user score, need to compare to existing scores and find match
    })
}

