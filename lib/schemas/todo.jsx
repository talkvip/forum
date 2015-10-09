Todos = new  Meteor.Collection('todos');

let TodosSchema = new SimpleSchema({
  text: {
    label: 'todo 内容',
    type: String
  },
  completed: {
    label: '是否完成',
    type: Boolean,
    defaultValue: false,
    optional: true
  },
  createAt: {
    type: Date,
    label: '创建时间',
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },
});

Todos.attachSchema(TodosSchema);