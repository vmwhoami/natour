const express = require("express");

const app = express();
const morgan = require("morgan");
const touRouter = require("./routes/touRoutes");
const useRouter = require("./routes/useRoutes");
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  console.log("hello from my midleware");
  next();
});
app.use((req, res, next) => {
  req.timerec = new Date().toISOString();
  next();
});

app.use("/api/v1/users", useRouter);
app.use("/api/v1/tours", touRouter);

module.exports = app;
