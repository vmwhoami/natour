const express = require("express");
//Users functions
const userControllers = require("./../controllers/userController");
const router = express.Router();

router
  .route("/")
  .get(userControllers.getUsers)
  .post(userControllers.createUser);
router
  .route("/:id")
  .get(userControllers.getUser)
  .patch(userControllers.modifyUser)
  .delete(userControllers.deletUser);

module.exports = router;
