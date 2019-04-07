import moment from 'moment';
import setLocalStorage from './setLocalStorage';
import displayFromLocalStorage from './displayElement';
import '../style/todo.css';

window.onload = () => {
  const todoForm = document.querySelector('#new-todo');
  const currentDate = document.querySelector('#currentDate');
  currentDate.innerHTML = moment().format('MMM Do YYYY');
  const { todos } = localStorage;

  if (!todos) localStorage.setItem('todos', JSON.stringify([]));

  if (todos) displayFromLocalStorage();

  todoForm.addEventListener('submit', (e) => {
    setLocalStorage(e);
  });
};
