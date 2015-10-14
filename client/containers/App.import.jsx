import {connect, dispatch} from '../../lib/reactredux';
import {initTodos, addTodo, completeTodo, deleteTodo, setVisibilityFileter, VisibilityFilters} from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import {Well} from '../../lib/reactbootstrap';

let App = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      todoFilter: VisibilityFilters.SHOW_ALL
    };
  },
  getMeteorData: function() {
    let todos = selectTodos(Todos.find().fetch(), this.state.todoFilter);
    return {
      loading: !FlowRouter.subsReady("todos"),
      todos: todos
    };
  },
  changeFilter(filter) {
    console.log(filter);
    this.setState({todoFilter: filter});
  },
  propTypes() {
    return {
      visibilityFilter: React.PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
      ]).isRequired
    }
  },
  componentDidMount() {

  },
  componentWillUnmount() {
    console.log('refresh all');
  },
  render() {
    console.log(this.data.todos);
    const {dispatch} = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text => dispatch(addTodo(text))}>
        </AddTodo>
        { this.data.loading ?
          <div className='loading-todos'>加载中...</div>
          :
          <div className='todos-container'>
            <Footer
              filter={this.state.todoFilter}
              onFilterChange={nextFilter => this.changeFilter(nextFilter)}>
            </Footer>
            <TodoList
              todos={this.data.todos}
              onTodoClick={(todo) => dispatch(completeTodo(todo))}
              onDeleteTodo={(todo) => dispatch(deleteTodo(todo))}>
            </TodoList>
          </div>
        }
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
    //visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    //visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);