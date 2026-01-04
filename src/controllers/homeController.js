// This is the '/' route "main page"
export function getHomepage(req, res) {
    try {
        res.send("Homepage");
        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
}

// api health test route
export function getHealth(req, res) {
    try {
        res.send({
            status: "OK",
            timestamp: new Date().toLocaleString()
        });
        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
}
