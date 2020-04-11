const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

//conect to database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASWORD
);
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connection Succesful");
  });
// working with database
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

const tesTour = new Tour({
  name: "Sex tour",
  price: 999,
});

tesTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });
//conecting to server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
