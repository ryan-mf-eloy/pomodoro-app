import {
  secondsHTML,
  minutesHTML,
  hoursHTML
} from './timer/start.js'

const generateRandomId = () => Math.round(Math.random() * 100000)

const timerContainer = document.querySelector('.timer-container')

const reachedTheLimit = time => time === 60

const addZeroOnSigleNumber = number =>
  String(number).length === 1 ? `0${number}` : number

const writeAccurentTime = (accurentTime, type) =>
  type.textContent = addZeroOnSigleNumber(accurentTime)

const clearTimes = () => {
  secondsHTML.textContent = '00'
  minutesHTML.textContent = '00'
  hoursHTML.textContent = '00'
}

const applyBoxShadow = color =>
  timerContainer.style.boxShadow = `0 0 0 20px ${color}`

const isTimeHalf = (minutes, totalTime) => minutes >= totalTime / 2
const isTimeEnding = (minutes, totalTime) => minutes >= (totalTime / 4) * 3

const getToDos = () => JSON.parse(window.localStorage.getItem('todos'))

const saveToDosInLocalStorage = toDos =>
  window.localStorage.setItem('todos', JSON.stringify(toDos))

const clearToDoList = () => 
  document.querySelector('.todo-list').innerHTML = ''

const clearAllFields = () => {
  document.querySelector('[name="todoTitle"]').value = ''
  document.querySelector('[name="todoColor"]').value = '#6b4aed'
  document.querySelector('[name="todoDescription"]').value = ''
}

export {
  clearTimes,
  reachedTheLimit,
  addZeroOnSigleNumber,
  writeAccurentTime,
  applyBoxShadow,
  isTimeHalf,
  isTimeEnding,
  generateRandomId,
  getToDos,
  saveToDosInLocalStorage,
  clearToDoList,
  clearAllFields
}