import init from './init.js'
import { getToDos, saveToDosInLocalStorage } from '../helpers.js'

const deleteTodo = ({ target }) => {
  const clickedInDeleteTodoButton = target.classList.contains('btn-error')
  || target.classList.contains('fa-trash-alt')

  if(clickedInDeleteTodoButton) {
    const toDos = getToDos()
    const toDoId = Number(target.dataset.js)
    const updatedToDos = toDos.filter(({ id }) => id !== toDoId)

    saveToDosInLocalStorage(updatedToDos)
    init(updatedToDos)
  }
}

export default deleteTodo