const removeElement = (e) => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  const currentTodo = e.target.parentNode;
  const { id } = currentTodo;
  const updatedTodos = [];
  currentTodo.remove();
  
  todos.forEach((todo) => {
    if(todo.id != id){
      updatedTodos.push(todo);
    }
  })
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
};

export default removeElement;
