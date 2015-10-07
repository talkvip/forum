let AddTodo = React.createClass({
  render() {
    return (
      <div>
        <input type="text" ref='input' />
        <button onClick={(e) => this.handleCilck(e)}>
          Add
        </button>
      </div>
    );
  },
  handleCilck(e) {
    const node = React.findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  },
  propTypes() {
    return {
      onAddClick: React.PropTypes.func.isRequired
    }
  }
});

export default AddTodo;