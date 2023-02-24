const express = require("express");

const router = express.Router();
const equationController = require("../controller/equationController");

/* GET equations listing. */
router
  .route("/")
  .get(equationController.getAll)
  .post(equationController.create);
router
  .route("/:id")
  .get(equationController.getById)
  .put(equationController.update)
  .delete(equationController.delete);

module.exports = router;
