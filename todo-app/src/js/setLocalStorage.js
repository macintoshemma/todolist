/* eslint-disable no-console */
import moment from 'moment';
import createNewTodo from './createNewTodo';


const setLocalStorage = (e) => {
  
  const formInput = document.querySelector('#todoForm')
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
    createNewTodo(allTodos[allTodos.length -1]);
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }
  formInput.reset();
};



export default setLocalStorage;
