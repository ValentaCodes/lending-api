const router = require("express").Router();

const [getAllUsers, getUser] = require("../../controllers/userController")

// GET all users
router.get("/", getAllUsers)

router.get("/:id", getUser)

module.exports = router;