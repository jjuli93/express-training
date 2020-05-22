const jwt = require('jwt-simple');

const jwtSecret = process.env.JWT_SECRET;

const authentication = (req, res, next) => {
  const { token = '' } = req.headers;

  try {
    const decodedToken = jwt.decode(token, jwtSecret);
    req.requestUser = decodedToken.email;
  } catch (error) {
    return res.status(401).send('token not valid');
  }

  return next();
};

module.exports = { authentication };
