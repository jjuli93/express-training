// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const userController = require('./controllers/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/user', [], userController.methodPost);
  // app.get('/endpoint/get/path', [], controller.methodGET);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
