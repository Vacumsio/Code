const express = require("express");

const router = express.Router();
const equationController = require("../controller/equationController");

/* GET equations listing. */
router
  .route("/")
  .get(equationController.getAll)
  .post(equationController.create);

module.exports = router;
