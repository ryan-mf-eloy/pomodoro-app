import { saveToDosInLocalStorage } from '../helpers.js'
import init from './init.js'

const clearAllButton = document.querySelector('.clear-all')

const clearAll = () => {
  const toDo = []
  saveToDosInLocalStorage(toDo)
  init(toDo)
}
clearAllButton.addEventListener('click', clearAll)

export default clearAll