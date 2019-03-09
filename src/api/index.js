const express = require("express");

const { healthRouter } = require("../routes/health/health.router");
const { catcallsRouter } = require("../routes/catcalls/catcalls.router");
const { addReportRouter } = require("../routes/addReport/addReport.router");

const router = express.Router();
router.use("/health", healthRouter);
router.use("/catcalls", catcallsRouter);
router.use("/addReport", addReportRouter);

module.exports = router;
