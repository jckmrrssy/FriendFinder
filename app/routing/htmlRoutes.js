
// Exporting routes to server 
module.exports = function(app) {
    // Home page route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "app/public/home.html"));
    });

    // Survey page route
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });

};
