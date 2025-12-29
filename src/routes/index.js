const router = require("express").Router();
const homeRoute = require("../controllers/homeRoute")
const userRoutes = require('./user');

router.use('/', homeRoute)
router.use('/user', userRoutes);

module.exports = router