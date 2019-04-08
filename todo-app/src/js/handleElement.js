/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
const moveElement = (e) => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  const complete = document.getElementsByClassName('complete')[0];
  const currentTodo = e.target.parentNode;
  const { id } = currentTodo;
  const completeBtn = e.target;
  const updatedTodos = [];

  todos.forEach((todo) => {
    if (todo.id == id) {
      todo.complete = true;
    }

    if (todo.complete == true) {
      currentTodo.parentNode.removeChild(currentTodo);
      complete.appendChild(currentTodo);
      currentTodo.removeChild(completeBtn);
    }
    updatedTodos.push(todo);
  });

  localStorage.setItem('todos', JSON.stringify(updatedTodos));
};

const removeElement = (event) => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  const currentTodo = e.target.parentNode;
  const { id } = currentTodo;
  currentTodo.remove();
  
  todos.forEach((todo) => {
    if(todo.id == id){
      
    }
  })
  localStorage.removeItem(`title${listId}`);
  localStorage.removeItem(`description${listId}`);
};

module.exports = { moveElement, removeElement };

// const listContainer = event.target.parentNode;
// const itemId = listContainer.id;
// const state = localStorage.getItem(`state${itemId}`);
// const completeSection = document.getElementsByClassName('complete')[0];
// console.log(event.target);
// if (state === 'todo') {
//   localStorage.setItem(`state${itemId}`, 'complete');
//   listContainer.parentNode.removeChild(listContainer);
//   completeSection.appendChild(listContainer);
// }
