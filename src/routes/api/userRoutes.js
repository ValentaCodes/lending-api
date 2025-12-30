const router = require("express").Router();

const {getAllUsers} = require("../../controllers/userController")

// GET all users
router.get("/", getAllUsers)

module.exports = router;