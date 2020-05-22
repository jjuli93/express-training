const db = require('../models');

const methodPost = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).send('Must specify an email');
  }

  try {
    const user = await db.user.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send('user does not exist');
    }

    user.admin = true;
    await user.save();
    return res.send(user);
  } catch (error) {
    return res.status(500).end();
  }
};

module.exports = { methodPost };
