let friendsArrayOfObjects = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        return res.json(friendsArrayOfObjects);
    });

    app.post("/api/friends", (req, res) => {
        var newFriend = req.body;
        var totalDiff = 100;

        for (let i in friendsArrayOfObjects) {
            var diff = 0
            for (let k in friendsArrayOfObjects[i].scores) {
                var checked = newFriend[i].scores[k];
                var current = req.body.scores[k]
                diff += Math.abs(parseInt(checked) - parseInt(current));
            }
            if (diff < totalDiff) {
                totalDiff = diff;
                var matchToSend = {
                    name: friendsArrayOfObjects[i].name,
                    picture: friendsArrayOfObjects[i].picture
                }
            };
        };
        console.log(newFriend);
        friendsArrayOfObjects.push(newFriend);
        res.send(matchToSend);  
    });
}