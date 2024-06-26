const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");

const User_Schem = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 10,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      minlength: 3,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

User_Schem.methods.generate_token = function () {
  return jwt.sign({ id: this._id }, process.env.TOKEN_SECRET, {
    expiresIn: "2h",
  });
};
const ValidateRegister = (obj) => {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(10).trim().required(),
    email: Joi.string().min(3).required().trim().email(),
    password: passwordComplexity().required(),
  });

  return Schema.validate(obj);
};
const User = mongoose.model("User", User_Schem);

module.exports = { User, ValidateRegister };
