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

export default moveElement;
