const jwt = require("jsonwebtoken");
const Student = require("../models/student");

exports.getToken = (student) => {
  console.log(student);
  const account = {
    userName: student.userName,
    id: student._id,
  };
  return jwt.sign(account, '12345-67890-09876-54321', { expiresIn: 3600 });
};

exports.verifyUser = (req, res, next) => {
  // check header or url parameters or post parameters for token
  //retrieve token from one of these places
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  // decode token

  console.log(token);
  if (token) {
    jwt.verify(token, '12345-67890-09876-54321', function (err, decoded) {
      if (err) {
        var err = new Error("You are not authenticated !");
        err.status = 401;
        return next(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    var err = new Error("No token provided!");
    err.status = 403;
    return next(err);
  }
};

