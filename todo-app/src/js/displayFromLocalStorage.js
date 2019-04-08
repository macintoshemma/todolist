import createNewTodo from './createNewTodo';

const displayFromLocalStorage = () => {
  const todoStore = JSON.parse(localStorage.getItem('todos'));

  todoStore.forEach((todo) => {
    createNewTodo(todo);
  });
};

export default displayFromLocalStorage;

