/* eslint-disable no-console */
import moment from 'moment';

const setLocalStorage = (e) => {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const complete = false;
  const id = Date.now();
  const date = moment().format('MMMM Do YYYY, H:mm');

  if (title.length > 1 && description.length > 1) {
    const allTodos = JSON.parse(localStorage.getItem('todos'));
    allTodos.push({
      title, description, complete, id, date,
    });
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }

};

export default setLocalStorage;
