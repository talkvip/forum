
let Todo = React.createClass({
  propTypes() {
    return {
      onClick: React.PropTypes.func.isRequired,
      text: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired
    };
  },
  handleRadioClick() {
    this.props.onClick();
  },
  handleTodoTextClick(e) {
    console.log('todo text click');
  },
  handleDeleteTodo() {
    this.props.onDeleteTodo();
  },
  render() {
    const innerRadio = <input type="radio" aria-label="..." />;
    return (
      <li
        className='todo-li'
        onClick={this.handleTodoTextClick}
        style={{
          color: this.props.completed ? '#ccc': '#333333',
          cursor: this.props.completed ? 'default': 'pointer'
        }}
        >
        {this.props.completed ?
          <input
            type="checkbox"
            className="toggle-complete"
            checked
            onClick={(e) => {
            e.stopPropagation();
            this.handleRadioClick();
          }}/>
          :
          <input
            type="checkbox"
            className="toggle-complete"
            onClick={(e) => {
            e.stopPropagation();
            this.handleRadioClick();
          }}/>
        }
        <span className='todo-text'>
          {this.props.text}
        </span>
        <span className="delete-todo glyphicon glyphicon-trash" aria-hidden="true"
              onClick={(e) => {
              e.stopPropagation();
              this.handleDeleteTodo();
        }}/>
      </li>
    );
  }
});

export default Todo;