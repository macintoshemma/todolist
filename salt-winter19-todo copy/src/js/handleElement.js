const moveElement = (event) => {
  const listContainer = event.target.parentNode;
  const itemId = listContainer.id;
  const state = localStorage.getItem(`state${itemId}`);
  const completeSection = document.getElementsByClassName('complete')[0];

  if (state === 'todo') {
    localStorage.setItem(`state${itemId}`, 'complete');
    listContainer.parentNode.removeChild(listContainer);
    completeSection.appendChild(listContainer);
  }
};

const removeElement = (event) => {
  const listContainer = event.target.parentNode;
  const listId = listContainer.id;
  listContainer.remove();

  localStorage.removeItem(`title${listId}`);
  localStorage.removeItem(`description${listId}`);
};

module.exports = { moveElement, removeElement };
