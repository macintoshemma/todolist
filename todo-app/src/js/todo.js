import moment from 'moment';
import setLocalStorage from './setLocalStorage';
import displayFromLocalStorage from './displayFromLocalStorage';
import '../style/todo.css';

window.onload = () => {
  const todoForm = document.querySelector('#todoForm');
  const currentDate = document.querySelector('#currentDate');
  currentDate.innerHTML = moment().format('MMM Do YYYY');
  const { todos } = localStorage;

  if (!todos) localStorage.setItem('todos', JSON.stringify([]));

  if (todos) displayFromLocalStorage();

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    setLocalStorage(e);
  });
};
