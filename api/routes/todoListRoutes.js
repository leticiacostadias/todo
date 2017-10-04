'use strict';

module.exports = function(app) {
  const controller = require('../controllers/todoListController');

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Routes
  app.route('/tasks')
    .get(controller.fetchAll)
    .post(controller.create);

  app.route('/tasks/:taskId')
    .put(controller.update)
    .delete(controller.destroy);
};
