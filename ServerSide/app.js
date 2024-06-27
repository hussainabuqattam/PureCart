const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectdb = require("./config/DB");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewars/errorhandler");

app.use(cors());

const PORT = process.env.PORT || 8000;

// ejs for mvc view
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// connect server
connectdb();
app.listen(PORT, () => {
  console.log(`hi node js listen in port ${PORT}`);
});
app.use(express.json());
app.use("/user", require("./router/auth"));
app.use("/password", require("./router/forgetPassword"));

// error handler
app.use(notFound);
app.use(errorHandler);
