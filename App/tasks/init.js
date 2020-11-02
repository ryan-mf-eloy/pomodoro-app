import createToDoItem from './create.js';
import deleteTodo from './delete.js'
import completeTodo from './complete.js'
import { getToDos, clearToDoList } from '../helpers.js'
import updateCompletedsToDoIndicator from './indicator.js'

const toDoList = document.querySelector('.todo-list')

let toDos = getToDos()
toDos = toDos ? toDos : []

const init = toDos => {
  clearToDoList()

  toDos.forEach(toDo => {
    const toDoItem = createToDoItem(toDo)
    toDoList.prepend(toDoItem)
  })

  updateCompletedsToDoIndicator()
}
init(toDos)

toDoList.addEventListener('click', deleteTodo)
toDoList.addEventListener('click', completeTodo)

export default init