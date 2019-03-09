const express = require("express");

const { healthRouter } = require("../routes/health/health.router");
const {
  catcallsRouter
} = require("../routes/catcalls/catcalls.router");

const router = express.Router();
router.use("/health", healthRouter);
router.use("/catcalls", catcallsRouter);

module.exports = router;
