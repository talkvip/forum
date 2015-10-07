import Todo from './Todo';

let TodoList = React.createClass({
  propTypes() {
    return {
      onTodoClick: PropTypes.func.isRequired,
      todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      }).isRequired).isRequired
    }
  },
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)} />
        )}
      </ul>
    );
  }
});

export default TodoList;