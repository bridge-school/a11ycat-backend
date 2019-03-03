const express = require("express");

const { catcallsController } = require("./catcalls.controller");

const router = express.Router();

router.get("", catcallsController);

module.exports = {
  catallsRouter: router
};
