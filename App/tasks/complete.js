import init from './init.js'
import { getToDos, saveToDosInLocalStorage } from '../helpers.js'
import updateCompletedsToDoIndicator from './indicator.js'

const completeTodo = ({ target }) => {
  const clickedInCompleteTodoButton = target.classList.contains('btn-success')
  || target.classList.contains('fa-check')

  if(clickedInCompleteTodoButton) {
    const toDos = getToDos()
    const toDoId = Number(target.dataset.js)
    const selectedTodo = toDos.findIndex(({ id }) => id === toDoId)
    toDos[selectedTodo] = { ...toDos[selectedTodo], completed: true }

    saveToDosInLocalStorage(toDos)
    init(toDos)
  }
}

export default completeTodo