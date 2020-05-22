const jwt = require('jwt-simple');
const db = require('../models');
const logger = require('../logger');

const secret = process.env.JWT_SECRET;

const methodPost = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('bad schema');
  }

  try {
    const user = await db.user.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).send('email or password is invalid');
    }

    const jwtPayload = { email: user.email, id: user.id };
    const token = jwt.encode(jwtPayload, secret);
    logger.info('New user has logged in: ', user.email);

    return res.json({ token });
  } catch (error) {
    logger.error(error);
    return res.status(500).end();
  }
};

module.exports = { methodPost };
