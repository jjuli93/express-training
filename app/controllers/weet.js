const db = require('../models');
const logger = require('../logger');
const weetService = require('../services/weets');

const methodPost = async (req, res) => {
  // TODO: add catch
  const content = await weetService.getWeet();

  const weet = {
    content,
    user_id: req.user.id
  };

  try {
    const newWeet = await db.weet.create(weet);
    logger.info('new user created: ', newWeet.content);
    return res.send(newWeet);
  } catch (error) {
    logger.error(error);
    return res.status(500).end();
  }
};

const methodGet = async (req, res) => {
  try {
    const weets = await db.weet.findAndCountAll({ where: {}, offset: 0, limit: 50 });
    return res.json(weets);
  } catch (error) {
    logger.error(error);
    return res.status(500).end();
  }
};

module.exports = { methodPost, methodGet };
