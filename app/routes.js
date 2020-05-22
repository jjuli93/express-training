// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const userController = require('./controllers/user');
const sessionController = require('./controllers/session');
const { woloxEmail } = require('./middlewares/woloxEmail');
const { authentication } = require('./middlewares/authentication');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/users', [authentication], userController.methodGet);
  app.post('/users', [woloxEmail], userController.methodPost);
  app.post('/users/session', [woloxEmail], sessionController.methodPost);
};
