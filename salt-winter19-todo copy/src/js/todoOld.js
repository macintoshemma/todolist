import { moveElement, removeElement } from './handleElement';
import setLocalStorage from './setLocalStorage';
import '../style/todo.css';

window.onload = () => {
  let maxId = localStorage.getItem('maxId');

  if (maxId == null) return;
  maxId = parseInt(maxId);

  const listItemsTodo = document.getElementsByClassName('todo')[0];
  const listItemsComplete = document.getElementsByClassName('complete')[0];

  for (let i = 0; i <= maxId; i++) {
    const newElement = document.createElement('div');
    const title = localStorage.getItem(`title${i}`);
    const description = localStorage.getItem(`description${i}`);
    let state = localStorage.getItem(`state${i}`);
    console.log(title);

    if (state == null) state = 'todo';

    const removeButton = document.createElement('button');
    const finishedButton = document.createElement('button');

    if (title == null) continue;

    const titleElement = document.createElement('div');
    const descriptionElement = document.createElement('div');

    newElement.className = 'list-element';
    titleElement.className = 'title-element';
    descriptionElement.className = 'description-element';
    removeButton.className = 'remove__btn';
    finishedButton.className = 'finished__btn';

    newElement.id = `${i}`;

    titleElement.textContent = title;
    descriptionElement.textContent = description;
    removeButton.textContent = 'Remove';
    finishedButton.textContent = 'Finished';

    removeButton.onclick = removeElement;
    finishedButton.onclick = moveElement;

    newElement.appendChild(titleElement);
    newElement.appendChild(descriptionElement);
    newElement.appendChild(removeButton);
    newElement.appendChild(finishedButton);

    if (state === 'todo') listItemsTodo.appendChild(newElement);
    else listItemsComplete.appendChild(newElement);
  }

  document.getElementById('newTaskForm').addEventListener('submit', setLocalStorage());
};
