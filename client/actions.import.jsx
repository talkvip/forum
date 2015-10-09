/**
 * action types
 */
export const INIT_TODOS = 'INIT_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * action creators
 */
export function initTodos(todos) {
  return {type: INIT_TODOS, todos};
}

export function addTodo(text) {
  return {type: ADD_TODO, text};
}

export function completeTodo(todo) {
  return {type: COMPLETE_TODO, todo};
}

export function deleteTodo(todo) {
  return {type: DELETE_TODO, todo};
}

export function setVisibilityFileter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}







