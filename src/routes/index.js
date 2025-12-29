const router = require("express").Router();

const userRoutes = require('/user');

// main routing index
// router.use('/', homeRoute);
// router.use('/api', apiRoutes);
router.use('/user', userRoutes);

module.exports = router