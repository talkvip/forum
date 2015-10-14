import {combineReducers} from '../lib/redux';
import {INIT_TODOS, ADD_TODO, COMPLETE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';
const {SHOW_ALL} = VisibilityFilters;

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
function visibilityFilter(state = SHOW_ALL, action = {}) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
function todos(state=[], action = {}) {
  switch (action.type) {
    case INIT_TODOS:
      return action.todos;
    case ADD_TODO:
      //return [
      //  ...state, {
      //    text: action.text,
      //    completed: false
      //  }];
      Meteor.call('Todos.insert', action.text);
      return Todos.find().fetch();
    case COMPLETE_TODO:
      //return [
      //  ...state.slice(0, action.index),
      //  Object.assign({}, state[action.index], {
      //    completed: !state[action.index].completed
      //  }),
      //  ...state.slice(action.index + 1)
      //];
      Meteor.call('Todos.toggleComplete', action.todo._id, !action.todo.completed);
      return Todos.find().fetch();
    case DELETE_TODO:
      //return [
      //  ...state.slice(0, action.index),
      //  Object.assign({}, state[action.index], {
      //    completed: !state[action.index].completed
      //  }),
      //  ...state.slice(action.index + 1)
      //];
      console.log(action.todo._id);
      Meteor.call('Todos.delete', action.todo._id);
      return Todos.find().fetch();
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;


