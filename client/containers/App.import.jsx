import {connect, dispatch} from '../../lib/reactredux';
import {initTodos, addTodo, completeTodo, deleteTodo, setVisibilityFileter, VisibilityFilters} from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import {Well} from '../../lib/reactbootstrap';

let App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData: function() {
    //var self = this;
    //FlowRouter.subsReady("todos", function() {
    //  self.props.dispatch(initTodos(Todos.find().fetch()));
    //});
    return {
      loading: !FlowRouter.subsReady("todos")
    };
  },
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
  componentDidMount() {
    var self = this;
    FlowRouter.subsReady("todos", function() {
      self.props.dispatch(initTodos(Todos.find().fetch()));
    });
    console.log('component mount');
    console.log(this.props);
  },
  componentWillUnmount() {
    console.log('refresh all');
  },
  render() {
    const {dispatch, visibleTodos, visibilityFilter} = this.props;
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
              filter={visibilityFilter}
              onFilterChange={nextFilter => dispatch(setVisibilityFileter(nextFilter))}>
            </Footer>
            <TodoList
              todos={visibleTodos}
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
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);