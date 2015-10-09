Meteor.methods({
  'Todos.insert': function(text) {
    Todos.insert({text: text});
  },
  'Todos.toggleComplete': function(_id, state) {
    Todos.update(_id, {$set: {completed: state}});
  },
  'Todos.delete': function(_id) {
    Todos.remove(_id);
  },
});