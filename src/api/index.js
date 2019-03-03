const express = require("express");

const { healthRouter } = require("../routes/health/health.router");
const {
  conferencesRouter
} = require("../routes/conferences/conferences.router");

const router = express.Router();
router.use("/health", healthRouter);
router.use("/conferences", conferencesRouter);

module.exports = router;
