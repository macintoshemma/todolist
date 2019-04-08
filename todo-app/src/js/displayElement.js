/* eslint-disable no-console */
import { moveElement, removeElement } from './handleElement';

const displayFromLocalStorage = () => {
  const todoStore = JSON.parse(localStorage.getItem('todos'));
  const todoMain = document.getElementsByClassName('todo')[0];
  const completeMain = document.getElementsByClassName('complete')[0];

  todoStore.forEach((todo) => {
    const newTodo = document.createElement('div');
    const title = document.createElement('div');
    const description = document.createElement('div');
    const removeBtn = document.createElement('button');
    const completeBtn = document.createElement('button');

    newTodo.className = 'todo-list';
    newTodo.id = todo.id;
    title.className = 'title';
    description.className = 'description';
    removeBtn.className = 'remove__btn';
    completeBtn.className = 'complete__btn';

    removeBtn.textContent = 'Remove';

    removeBtn.onclick = removeElement;
    completeBtn.onclick = moveElement;

    title.textContent = todo.title;
    description.textContent = todo.description;

    newTodo.appendChild(title);
    newTodo.appendChild(description);
    newTodo.appendChild(removeBtn);
    newTodo.appendChild(completeBtn);

    if (todo.complete === false) {
      todoMain.appendChild(newTodo);
      completeBtn.textContent = 'Complete';
    }

    if (todo.complete === true) {
      completeMain.appendChild(newTodo);
      completeBtn.textContent = 'Undo';
    }
  });
};

export default displayFromLocalStorage;
