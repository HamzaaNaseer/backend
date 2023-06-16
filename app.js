const express = require("express");
const cors = require("cors");

const app = express();
const http = require("http");
const routes = require("./routes");
const { ErrorMiddleware } = require("./middlewares/error");
const server = http.createServer(app);

//middlewares
app.use(express.json({ strict: false }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Good Luck Hamzaa!!");
});
app.use(routes);

//error middleware
app.use(ErrorMiddleware);

module.exports = app;
