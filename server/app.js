const express = require("express");
const app = express();
const regexRouter = require("./routes/regex");
const cors = require("cors");
const xss = require("xss-clean");
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");
const notFound = require("./middlewares/not-found");
const path = require("path");

app.use(xss());
app.use(helmet());
app.use(cors());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 15,
  })
);

app.use("/", express.static(path.join(__dirname, "../client/build")));

app.use(express.json());
app.use("/api/v1/build", regexRouter);
app.use(notFound);

app.listen(500, console.log("server is running...."));
