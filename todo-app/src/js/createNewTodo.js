/* eslint-disable no-console */
import { moveComplete, moveIncomplete } from './moveTodo';
import removeElement from './removeTodo';

const createNewTodo = (todo) => {
  const todoMain = document.getElementsByClassName('todo')[0];
  const completeMain = document.getElementsByClassName('complete')[0];

  const newTodo = document.createElement('div');
  const title = document.createElement('div');
  const description = document.createElement('div');
  const date = document.createElement('div');
  const removeBtn = document.createElement('button');
  const completeBtn = document.createElement('button');
  const undoBtn = document.createElement('button')

  newTodo.id = todo.id;
  newTodo.className = 'todoItem';
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
  
  /*const newTodo2 = `
    <div class="todoItem" id="${todo.id}">
      <div class="title">${todo.title}</div>
      <div class="description">${todo.description}</div>
      <div class="date">${todo.date}</div>
    </div>
  `*/

  if (todo.complete === false) {
    todoMain.appendChild(newTodo);
    //todoMain.insertAdjacentHTML('beforeend', newTodo2);
    newTodo.appendChild(completeBtn);
    
  }

  if (todo.complete === true) {
    completeMain.appendChild(newTodo);
    newTodo.appendChild(undoBtn);
  }
};

export default createNewTodo;
