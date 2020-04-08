const express = require("express");

const app = express();
const morgan = require("morgan");
const touRouter = require("./routes/touRoutes");
const useRouter = require("./routes/useRoutes");
app.use(express.json());
app.use(express.static("public"));

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("hello from my midleware");
  next();
});
app.use((req, res, next) => {
  req.timerec = new Date().toISOString();
  next();
});

//Tour functions

//

//Routes

app.use("/api/v1/users", useRouter);
app.use("/api/v1/tours", touRouter);

// starting server
module.exports = app;
