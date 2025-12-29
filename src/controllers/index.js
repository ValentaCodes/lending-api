const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoute = require('./homeRoute');
const userRoutes = require('/user');

// main routing index
router.use('/', homeRoute);
router.use('/api', apiRoutes);
router.use('/user', userRoutes);

module.exports = router