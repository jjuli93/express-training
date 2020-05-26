// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const userController = require('./controllers/user');
const sessionController = require('./controllers/session');
const adminController = require('./controllers/admin');
const weetController = require('./controllers/weet');
const { woloxEmail } = require('./middlewares/woloxEmail');
const { authentication } = require('./middlewares/authentication');
const { admin } = require('./middlewares/admin');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', [woloxEmail], userController.methodPost);
  app.get('/users', [authentication], userController.methodGet);
  app.post('/users/session', [woloxEmail], sessionController.methodPost);
  app.post('/admin/users', [authentication, admin], adminController.methodPost);
  app.get('/weets', [authentication], weetController.methodGet);
  app.post('/weets', [authentication], weetController.methodPost);
};
