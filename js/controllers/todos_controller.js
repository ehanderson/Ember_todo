Todos.TodoController = Ember.ArrayController.extend({
  actions: {
    createTodo: function(){
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      var todo = this.store.createRecord('todo', {
        title: title,
        isComplete: false
      });
      this.set('newTitle', '');
      this.save();
    }
  }
})
