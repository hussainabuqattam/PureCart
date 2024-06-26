const asynchandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User, ValidateRegister } = require("../modules/User");

/*****
 * @desc Add new user
 * @method post
 * @route  /user/register
 * @access public
 */

module.exports.register = asynchandler(async (req, res) => {
  try {
    const checkemail = await User.findOne({ email: req.body.email });
    if (checkemail) {
      return res.status(400).json({
        message: "this email was registered before please add another email",
      });
    }
    const { error } = await ValidateRegister(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    const add_user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const new_user = await add_user.save();
    res.status(201).json(new_user);
  } catch (error) {
    res.status(500).json(error);
  }
});
