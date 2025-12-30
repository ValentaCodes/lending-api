const router = require("express").Router();
const homeRoute = require("../controllers/homeController")
const apiRoutes = require('./api');
const authRoutes = require('./authRoutes.js');

router.use('/', homeRoute)
router.use('/api', apiRoutes);
router.use('/authRoutes', authRoutes);

module.exports = router