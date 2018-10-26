let friendsArrayOfObjects = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        return res.json(friendsArrayOfObjects);
    });

    app.post("/api/friends", (req, res) => {
        let newFriend = req.body;
        
        console.log(newFriend);
        // *PUSH THE newFriend INTO THE FRIENDS ARRAY* // 
        
        res.json(newFriend);
    })
}