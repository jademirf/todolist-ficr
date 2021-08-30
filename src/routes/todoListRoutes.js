'use strict';
var jwt = require('jsonwebtoken');


module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/login')
    .post((req, res) => {
      const jwtSecret = process.env.JWT_KEY || 'senhaSuperSecreta'
      let token = jwt.sign(req.body.user, jwtSecret)

      res.send(token)
    })
};
