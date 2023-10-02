const getTokenFromHeader = require("../Utils/getTokenFromHeader");
const verifyToken = require("../Utils/verifyToken");

const isLoggedIn = (req, res, next) => {
  //1.Get the token from header
  const token = getTokenFromHeader(req);
  //2.Verify the token
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.json({
      message: "Invalid Token or Expired Token, Please Login Again",
    });
  }
  //3.Save the user into req object
  next();
};

module.exports = isLoggedIn;
