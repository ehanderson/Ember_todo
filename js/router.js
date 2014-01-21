Todos.Router.map(function () {
  this.resource('todos', { path: '/' });
});

Todos.TodoRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
})
