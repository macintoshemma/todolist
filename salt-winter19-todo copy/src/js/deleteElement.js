const removeElement = (event) => {
  const listContainer = event.target.parentNode;
  const listId = listContainer.id;
  listContainer.remove();

  localStorage.removeItem(`title${listId}`);
  localStorage.removeItem(`description${listId}`);
};

export default removeElement;
