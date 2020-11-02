import { getToDos } from '../helpers.js'

const indicator = document.querySelector('.indicator')

const updateCompletedsToDoIndicator = () =>{
  const toDos = getToDos()
  const totalToDos = toDos.length
  const totalTodosCompleteds = toDos.filter(({ completed }) => completed).length

  return indicator.textContent = `${totalTodosCompleteds}/${totalToDos}`
}

export default updateCompletedsToDoIndicator