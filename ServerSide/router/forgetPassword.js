const express = require("express");
const route = express.Router();
const requireAuth = require("../middlewars/requireAuth");
const {
  updatepassword,
  addNewPassword,
  checkemailToChangePassword,
  RenderPageEmailCheck,
} = require("../Controllers/forgetpassword");

// password/forgot
route.route("/forgot").get(RenderPageEmailCheck).post(checkemailToChangePassword);
// password/forgot/:id/:token
route.route("/forgot/:id/:token").get(addNewPassword).post(updatepassword);

module.exports = route;