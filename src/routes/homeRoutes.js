const router = require("express").Router();
const {getHomepage, getHealth} = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/health", getHealth);

module.exports = router;