const express = require("express");

const {
  catcallsController,
  postCatCallController
} = require("./catcalls.controller");

const router = express.Router();

router.get("", catcallsController);
router.post("", postCatCallController);

module.exports = {
  catcallsRouter: router
};
