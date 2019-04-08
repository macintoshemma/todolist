/* eslint-disable no-console */
import { moveComplete, moveIncomplete } from './moveElement';
import removeElement from './removeElement';

const displayFromLocalStorage = () => {
  const todoStore = JSON.parse(localStorage.getItem('todos'));
  const todoMain = document.getElementsByClassName('todo')[0];
  const completeMain = document.getElementsByClassName('complete')[0];

  todoStore.forEach((todo) => {
    const newTodo = document.createElement('div');
    const title = document.createElement('div');
    const description = document.createElement('div');
    const date = document.createElement('div');
    const removeBtn = document.createElement('button');
    const completeBtn = document.createElement('button');
    const undoBtn = document.createElement('button')

    newTodo.id = todo.id;
    newTodo.className = 'todo-list';
    title.className = 'title';
    description.className = 'description';
    date.className = 'date'
    removeBtn.className = 'remove__btn';
    completeBtn.className = 'complete__btn';
    undoBtn.className = 'undo__btn';

    removeBtn.textContent = 'Remove';
    completeBtn.textContent = 'Complete';
    undoBtn.textContent = 'Undo';

    removeBtn.onclick = removeElement;
    completeBtn.onclick = moveComplete;
    undoBtn.onclick = moveIncomplete; 

    title.textContent = todo.title;
    description.textContent = todo.description;
    date.textContent = todo.date;

    newTodo.appendChild(title);
    newTodo.appendChild(description);
    newTodo.appendChild(date);
    newTodo.appendChild(removeBtn);
    

    if (todo.complete === false) {
      todoMain.appendChild(newTodo);
      newTodo.appendChild(completeBtn);
      
    }

    if (todo.complete === true) {
      completeMain.appendChild(newTodo);
      newTodo.appendChild(undoBtn);
    }
  });
};

export default displayFromLocalStorage;
