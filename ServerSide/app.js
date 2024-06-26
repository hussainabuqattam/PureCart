const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectdb = require("./config/DB");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewars/errorhandler");

app.use(cors({
  origin: "http://localhost:3000"
}));

const PORT = process.env.PORT || 8000;

// connect server
connectdb();
app.listen(PORT, () => {
  console.log(`hi node js listen in port ${PORT}`);
});
app.use(express.json());
app.use("/user", require("./router/auth"));

// error handler
app.use(notFound);
app.use(errorHandler);
