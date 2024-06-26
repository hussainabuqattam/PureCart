const asynchandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User } = require("../modules/User");

/*****
 * @desc login user
 * @method post
 * @route  /user/login
 * @access public
 */
module.exports.login = asynchandler(async (req, res) => {
  const checkemail = await User.findOne({ email: req.body.email });

  if (!checkemail) {
    return res.status(400).json({ message: "your email is not exist" });
  }
  const compare_password = await bcrypt.compare(
    req.body.password,
    checkemail.password
  );
  if (!compare_password) {
    return res
      .status(400)
      .json({ message: "your password is not correct please try again" });
  }
  const token = checkemail.generate_token();
  const { password, ...other } = checkemail._doc;
  res.status(201).json({ other, token });
});
