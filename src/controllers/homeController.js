// This is the '/' route "main page"
const getHomepage = async (req, res) => {
    try {
        res.send("lending app api");
        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
};

// api health test route
const getHealth = async (req, res) => {
    try {
        res.send("OK");
        res.status(200);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = [getHomepage, getHealth];