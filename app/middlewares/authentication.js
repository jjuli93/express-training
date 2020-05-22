const jwt = require('jwt-simple');
const db = require('../models');

const jwtSecret = process.env.JWT_SECRET;

const authentication = async (req, res, next) => {
  const { token = '' } = req.headers;

  try {
    const decodedToken = jwt.decode(token, jwtSecret);
    const { id } = decodedToken;
    try {
      const user = await db.user.findOne({ where: { id } });
      if (!user) {
        return res.status(400).send('user not found');
      }
      // eslint-disable-next-line require-atomic-updates
      req.user = user;
      return next();
    } catch (error) {
      return res.status(500).end();
    }
  } catch (error) {
    return res.status(401).send('token not valid');
  }
};

module.exports = { authentication };
