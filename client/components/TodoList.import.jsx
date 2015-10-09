import Todo from './Todo';

let TodoList = React.createClass({
  propTypes() {
    return {
      onTodoClick: React.PropTypes.func.isRequired,
      onDeleteTodo: React.PropTypes.func.isRequired,
      todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
      }).isRequired).isRequired
    }
  },
  render() {
    return (
      <ul className='todo-ul'>
        {this.props.todos.map((todo) =>
          <Todo {...todo}
                key={todo._id}
                onClick={() => this.props.onTodoClick(todo)}
                onDeleteTodo={() => this.props.onDeleteTodo(todo)}
          />
        )}
      </ul>
    );
  }
});

export default TodoList;