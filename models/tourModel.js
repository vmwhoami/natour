const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "E nevoie de un nume!!!"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 3.4,
  },
  price: {
    type: Number,
    required: [true, " E nevoie de un pret!!!"],
  },
});
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
