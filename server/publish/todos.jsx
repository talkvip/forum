Meteor.publish('todos', function() {
  //var self = this;
  //Meteor.setTimeout(function() {
  //  self.ready();
  //}, 3000);
  return Todos.find({});
});