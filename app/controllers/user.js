const db = require('../models');
const logger = require('../logger');

const methodPost = async (req, res) => {
  const { email, password, name, last_name } = req.body;

  if (!email || !password || !name || !last_name) {
    return res.status(400).send('bad schema');
  }

  if (password.length < 8) {
    return res.status(400).send('password must be at least 8 characters long');
  }

  const user = await db.user.findOne({ where: { email } });
  if (user) {
    return res.status(400).send('email already taken');
  }

  // TODO: encrypt the password

  try {
    const newUser = await db.user.create(req.body);
    logger.info('new user created: ', newUser.email);
    return res.send(newUser);
  } catch (error) {
    logger.error(error);
    return res.status(500).end();
  }
};

const methodGet = async (req, res) => {
  try {
    // TODO: add pagination
    const users = await db.user.findAndCountAll({ where: {}, offset: 0, limit: 50 });
    return res.json(users);
  } catch (error) {
    logger.error(error);
    return res.status(500).end();
  }
};

module.exports = { methodPost, methodGet };
// TODO: add tests
