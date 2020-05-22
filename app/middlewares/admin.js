const admin = (req, res, next) => {
  if (!req.user.admin) {
    res.status(403).send('Must be an admin to use this endpoint');
  }
  return next();
};

module.exports = { admin };
