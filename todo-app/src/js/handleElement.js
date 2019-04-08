const moveElement = (e) => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  const complete = document.getElementsByClassName('complete')[0];
  const currentTodo = e.target.parentNode;
  const { id } = currentTodo;
  const completeBtn = document.getElementsByClassName('complete__btn')

  todos.forEach((todo) => {
    if (todo.id == id) {
      todo.complete = true;
    }

    if (todo.complete == true) {
      currentTodo.parentNode.removeChild(currentTodo);
      complete.appendChild(currentTodo);
      completeBtn.textContent = 'Undo';
    }
  });
};

const removeElement = (event) => {
  const listContainer = event.target.parentNode;
  const listId = listContainer.id;
  listContainer.remove();

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
