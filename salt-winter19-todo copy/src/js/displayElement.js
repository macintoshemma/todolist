/* eslint-disable no-console */
const displayFromLocalStorage = () => {
  const todoItems = localStorage.getItem('todos');
  console.log(todoItems);
};

export default displayFromLocalStorage;
