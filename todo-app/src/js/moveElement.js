const moveComplete = (e) => {
  const todoStore = JSON.parse(localStorage.getItem('todos'));
  const complete = document.getElementsByClassName('complete')[0];
  const undoBtn = document.createElement('button')
  const currentTodo = e.target.parentNode;
  const { id } = currentTodo;
  const completeBtn = e.target;
  const updatedTodos = [];

  undoBtn.textContent = 'Undo';
  undoBtn.onclick = moveIncomplete; 
  undoBtn.className = 'undo__btn';

  todoStore.forEach((todo) => {
    if (todo.id == id && todo.complete == false) {
      todo.complete = true;
      currentTodo.removeChild(completeBtn)
      currentTodo.parentNode.removeChild(currentTodo);
      currentTodo.appendChild(undoBtn)
      complete.appendChild(currentTodo);
    }
    updatedTodos.push(todo);
  });
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
};


const moveIncomplete = (e) => {
  const todoStore = JSON.parse(localStorage.getItem('todos'));
  const todoIncomplete = document.getElementsByClassName('todo')[0];
  const completeBtn = document.createElement('button')
  const undoBtn = e.target;
  const currentTodo = e.target.parentNode;
  const { id } = currentTodo;
  const updatedTodos = [];

  completeBtn.textContent = 'Complete';
  completeBtn.onclick = moveComplete; 
  completeBtn.className = 'complete__btn';

  todoStore.forEach((todo) => {
    if(todo.id == id && todo.complete == true) {
      todo.complete = false;
      currentTodo.removeChild(undoBtn)
      currentTodo.parentNode.removeChild(currentTodo);
      currentTodo.appendChild(completeBtn)
      todoIncomplete.appendChild(currentTodo);
    };
    updatedTodos.push(todo);
  });
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
};


module.exports = { moveComplete, moveIncomplete };
