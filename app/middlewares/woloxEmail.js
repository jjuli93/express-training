const woloxEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes('@wolox.com')) {
    return res.status(400).send('email must be from wolox');
  }
  return next();
};

module.exports = { woloxEmail };
