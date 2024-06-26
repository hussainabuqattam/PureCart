const Jwt = require("jsonwebtoken");
const { User } = require("../modules/User");

const requireAuth = async (req, res, next) => {
  // verify token
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "authorization token require" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = Jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = await User.findeOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ meesage: "not authorization" });
  }
};

module.exports = requireAuth;
