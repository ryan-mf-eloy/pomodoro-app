import init from './init.js'
import {
  generateRandomId,
  saveToDosInLocalStorage,
  getToDos,
  clearAllFields
} from '../helpers.js'

const insertTodoForm = document.querySelector('.insert-todo-form')
const toDoTitleField = document.querySelector('[name="todoTitle"]')
const toDoColorField = document.querySelector('[name="todoColor"]')
const toDoDescriptionField = document.querySelector('[name="todoDescription"]')

const saveTodo = (event) => {
  event.preventDefault()
  
  const isEmptyTitle = toDoTitleField.value.trim() === ''
  if(isEmptyTitle) return alert('The "TITLE" field is required!')

  const toDos = getToDos()
  
  const title = toDoTitleField.value;
  const description = toDoDescriptionField.value;
  const color = toDoColorField.value;
  
  const newTodo = [ ...toDos, {
    title, color, description, completed: false, id: generateRandomId()
  }]

  saveToDosInLocalStorage(newTodo)
  init(newTodo)
  clearAllFields()
}
insertTodoForm.addEventListener('submit', saveTodo)

export default saveTodo