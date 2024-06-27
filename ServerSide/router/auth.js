const express = require("express");
const route = express.Router();
const { register } = require("../Controllers/register");
const { login } = require("../Controllers/login");
const requireAuth = require("../middlewars/requireAuth");
const {
  updatepassword,
  addNewPassword,
  checkemailToChangePassword,
  RenderPageEmailCheck,
} = require("../Controllers/forgetpassword");
// edit this after add new route for data
// route.use(requireAuth);

// add new user the route is =>  /user/register
route.post("/register", register);
route.post("/login", login);


module.exports = route;
