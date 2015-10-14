import {Button, Input} from '../../lib/reactbootstrap';

let AddTodo = React.createClass({
  getInitialState() {
    return {
      todoText: ''
    };
  },
  handleChange(e) {
    this.setState({
      todoText: e.target.value
    });
  },
  render() {
    const addTodoBtn = (
      <Button bsStyle="primary" onClick={(e) => this.handleCilck(e)}>
        Add
      </Button>
    );
    return (
      <form>
        <Input type="text"
               value={this.state.todoText}
               placeholder="Enter text"
               buttonAfter={addTodoBtn}
               onChange={this.handleChange}/>
      </form>
    );
  },
  handleCilck(e) {
    const text = this.state.todoText;
    this.props.onAddClick(text);
    this.setState({
      todoText: ''
    });
  },
  //shouldComponentUpdate() {
  //  return false;
  //},
  propTypes() {
    return {
      onAddClick: React.PropTypes.func.isRequired
    }
  }
});

export default AddTodo;