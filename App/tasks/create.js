const createCompletedMessage = () => {
  const completedMessage = document.createElement('div')
  completedMessage.classList.add('completed-overlay')
  completedMessage.innerHTML = `<h6><i class="fa fa-check"></i> Completed</h6>`

  return completedMessage
}

const insertCompletedMessage = toDoItem =>
  toDoItem.append(createCompletedMessage())

const createToDoItem = ({ title, description, color, completed, id }) => {
  const toDoItem = document.createElement('li')
  toDoItem.innerHTML = `<span style="background: ${color}"></span>
  <strong>${title}</strong>
  <p>${description ? description : '---'}</p>
  <div>
    <button data-js="${id}" class="btn btn-icon btn-success">
    <i data-js="${id}" class="fa fa-check"></i>
    </button>
    <button data-js="${id}" class="btn btn-icon btn-error">
      <i data-js="${id}" class="fa fa-trash-alt"></i>
    </button>
  </div>`

  if(completed)
    insertCompletedMessage(toDoItem)

  return toDoItem;
}

export default createToDoItem