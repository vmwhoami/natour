const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "E nevoie de un nume!!!"],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, "Please specify the duration of the tourS"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "Please let us know what is the max group size"],
  },
  difficulty: {
    type: String,
  },
  ratingsAverage: {
    type: Number,
    default: 3.4,
  },
  ratingsQuantity: {
    type: Number,
  },
  price: {
    type: Number,
    required: [true, " E nevoie de un pret!!!"],
  },
  summary: {
    type: String,
    required: [true, "We need a small description of the tour"],
  },
  description: {
    type: String,
  },
  imageCover: {
    type: String,
    required: [true, "It is needed the image of the cover"],
  },
  images: [String],
  startDates: [Date],
});
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
