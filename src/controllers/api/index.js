const router = require("express").Router();
const loans = require("./loanController");
const user = require("./userController");

router.use("/api")

router.get('/api', async (req, res) => {
    try {
        res.send("this is api page")
    } catch (error) {
        res.status(500)
    }
})


router.get("/db-test", async (req, res) => {
    try {
        const { pool } = require('../../config/connection');

        // Query to get all users (write the SQL yourself)
        const [users] = await pool.query("select * from users");

        res.json({
            success: true,
            users: users
        });

    } catch (e) {
        res.status(500)
    }
})

module.exports = router;