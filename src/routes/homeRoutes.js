const router = require("express").Router();

// This is the '/' route "main page"
router.get("/", async (req, res) => {
    try {
        res.send("lending app api");
        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
});

// api health test route
router.get("/health", async (req, res) => {
    try {
        res.send("OK");
        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;