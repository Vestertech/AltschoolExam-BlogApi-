const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const app = express();

// Middleware

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));

app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({status: 'failed', message: 'This route does not exist'});
});

module.exports = app;