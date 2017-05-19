var express = require('express');
var todosRouter = express.Router();

var seededTodos =
/* INDEX TODOS */
todosRouter.get('/', function(req,res) {
  var seededTodos = [
    {
      description: "get beer",
      urgent: true
    }, {
      description: "dry cleaning",
      urgent: false
    },{
      description: "dry cleaning",
      urgent: false
    }
  ];

/* SHOW TODO */
router.get('/:id', function(req,res) {
  var todo = data.seededTodos[req.params.id];

  res.render('todos/show', {
    todo: todo
  });
});

var numberOfTodos = seededTodos.length
  res.render('todos/index', {
    todos: seededTodos,
    numberOfTodos: numberOfTodos
  });

todosRouter.get('/new', function(req, res){
  res.render('todos/new')
} 
});

module.exports = todosRouter;