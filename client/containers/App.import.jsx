import {connect} from '../../lib/reactredux';
import {addTodo, completeTodo, setVisibilityFileter, VisibilityFilters} from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

let App = React.createClass({
  propTypes() {
    return {
      visibleTodos: React.PropTypes.arrayOf(React.propTypes.shape({
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
      })),
      visibilityFilter: React.PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
      ]).isRequired
    }
  },
  render() {
    const {dispatch, visibleTodos, visibilityFilter} = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text => dispatch(addTodo(text))}>
        </AddTodo>
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => dispatch(completeTodo(index))}>
        </TodoList>
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter => dispatch(setVisibilityFileter(nextFilter))}>
        </Footer>
      </div>
    )
  }
});


function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
};

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);





