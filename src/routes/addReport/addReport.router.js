const express = require("express");

const { addReportController } = require("./addReport.controller");

const router = express.Router();

router.post("", addReportController);

module.exports = {
  addReportRouter: router
};
