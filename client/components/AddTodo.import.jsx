import {Button, Input} from '../../lib/reactbootstrap';

let AddTodo = React.createClass({
  render() {
    const addTodoBtn = (
      <Button bsStyle="primary" onClick={(e) => this.handleCilck(e)}>
        Add
      </Button>
    );
    return (
      <form>
        <Input type="text" ref='input' placeholder="Enter text" buttonAfter={addTodoBtn}/>
      </form>
    );
  },
  handleCilck(e) {
    const text = this.refs.input.getValue().trim()
    this.props.onAddClick(text);
    React.findDOMNode(this.refs.input).value = '';
  },
  propTypes() {
    return {
      onAddClick: React.PropTypes.func.isRequired
    }
  }
});

export default AddTodo;