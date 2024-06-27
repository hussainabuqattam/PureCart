const jwt = require("jsonwebtoken");
const { User, passwordvalidate } = require("../modules/User");
const asynchandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

module.exports.RenderPageEmailCheck = asynchandler(async (req, res) => {
  // render the page check emaill
  res.render("checkemail");
});

module.exports.checkemailToChangePassword = asynchandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res
      .status(400)
      .json({ message: "your email not found please try again" });
  }
  const secret = process.env.TOKEN_SECRET + user.password;
  const token = jwt.sign({ email: user.email }, secret, {
    expiresIn: "10m",
  });

  const Link = `${process.env.HOST_DB}/password/forgot/${user._id}/${token}`;
  const transporte = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USE_SEND,
      pass: process.env.PASSWORD_USE_SEND,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USE_SEND,
    to: user.email,
    subject: "PURECART-Change Password",
    html: ` 
    <div style="max-width: 600px; margin: auto; padding: 20px; background: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <div style="background-color: #007bff; color: #ffffff; text-align: center; padding: 10px; border-top-left-radius: 8px; border-top-right-radius: 8px;">
      <h2 style="margin: 0;">Password Reset</h2>
    </div>
    <div style="padding: 20px;">
      <p style="margin-bottom: 20px; color: #666666;">Hello,</p>
      <p style="margin-bottom: 20px; color: #666666;">We received a request to reset your password. Click the button below to reset it:</p>
      <a href=${Link} style="display: inline-block; background-color: #007bff; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin-top: 10px;">Reset Password</a>
      <p style="margin-top: 20px; margin-bottom: 20px; color: #666666;">If you didn't request this change, you can ignore this email.</p>
    </div>
    <div style="margin-top: 20px; color: #666666; text-align: center;">
      <p style="margin: 0;">This email was sent automatically. Please do not reply to this email.</p>
    </div>
  </div>
  `,
  };
  await transporte.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ message: "Failed to send email. Please try again later." });
    }
    console.log("Email sent:", info.response);
    res.render("sendlink");
  });
});

module.exports.addNewPassword = asynchandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(400).json("user not found");
  }
  const secret = process.env.TOKEN_SECRET + user.password;
  try {
    jwt.verify(req.params.token, secret);
    res.render("updatepassword");
  } catch (error) {
    console.log(error);
    res.json({ message: "error please try again" });
  }
});

module.exports.updatepassword = asynchandler(async (req, res) => {
  const { error } = await passwordvalidate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400).json({ message: "user not found please try again" });
  }
  const secret = process.env.TOKEN_SECRET + user.password;
  try {
    // check if token working
    jwt.verify(req.params.token, secret);
    // hash a new password and save it
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    user.password = req.body.password;
    await user.save;
    // render success page for change password
    res.render("passwordupdated");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error in server side please try again in another time",
    });
  }
});
