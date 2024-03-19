const jwt = require("jsonwebtoken");

const tokenAuthentication = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(401).send();
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.status(403).send();
    } else {
      req.user = user;
      next();
    }
  });
};

module.exports = tokenAuthentication;
