const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verify = jwt.verify(token, process.env.USER_KEY);
    next();
  } catch (err) {
    res.status(401).json({
      res: "wrong token",
    });
  }
};
