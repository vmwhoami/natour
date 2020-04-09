const express = require("express");
const tourControllers = require("./../controllers/tourController");
const router = express.Router();

router.param("id", tourControllers.checkId);

router
  .route("/")
  .get(tourControllers.getAllTours)
  .post(tourControllers.createTour);
router
  .route("/:id")
  .get(tourControllers.getSingleTour)
  .patch(tourControllers.modifyTour)
  .delete(tourControllers.deleteTour);

module.exports = router;
