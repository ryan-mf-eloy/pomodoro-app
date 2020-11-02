import {
  reachedTheLimit,
  writeAccurentTime
} from '../helpers.js'

import { startConfetti } from '../libs/confetti.js'
import { playTimerSong } from './songs.js'

import {
  openModal,
  closeModal,
  congratulationsModal,
  backToWorkModal,
  changeTimerContainerBorder,
  defineTimerBorderController
} from './animations.js'

import stop from './stop.js'

const hoursHTML = document.querySelector('.hours')
const minutesHTML = document.querySelector('.minutes')
const secondsHTML = document.querySelector('.seconds')
const startButton = document.querySelector('.start-button')
const startNewPomodoro = document.querySelector('.start-new-pomodoro')
const startBreakButton = document.querySelector('.start-break')

const limitTimeToWork = 25
const limitTimeToBreak = 5

let setTime
let setBreak

let POMODORO = 0
let seconds = 0
let hours = 0
let minutes = 0

const initBreakTime = () => {
  setBreak = setInterval(() => setSeconds(seconds), 20)
  changeTimerContainerBorder('begin')
}
startBreakButton.addEventListener('click', initBreakTime)

const resetTimer = () => {
  POMODORO = 0
  seconds = 0
  minutes = 0
  hours = 0
  setTime = null
  setBreak = null
}

const persistTimeFormat = (time, type) => {
  if (reachedTheLimit(time)) {
    if(type === secondsHTML){
      writeAccurentTime(seconds = 1, secondsHTML)
      return setMinutes()
    }
  }
  writeAccurentTime(time, type)
}

const finishWorkTime = () => {
  stop(resetTimer)
  openModal(congratulationsModal)
  startConfetti()
}

const finishBreakTime = () => {
  stop(resetTimer)
  openModal(backToWorkModal)
  setPomodoro()
}

const setMinutes = () => {
  const isBreakTime = setBreak;

  playTimerSong()
  persistTimeFormat(++minutes, minutesHTML)
  defineTimerBorderController(setBreak, minutes)

  const isNotBreakTime = !isBreakTime && minutes === limitTimeToWork
  const isNotWorkTime = isBreakTime && minutes === limitTimeToBreak
  
  if(isNotBreakTime) return finishWorkTime()
  if(isNotWorkTime) return finishBreakTime()
  
}
const setPomodoro = () => ++POMODORO
const setHours = () => persistTimeFormat(++hours, hoursHTML)
const setSeconds = () => persistTimeFormat(++seconds, secondsHTML)

const start = ({ target }) => {
  !target && resetTimer()
  setTime = setInterval(() => setSeconds(seconds), 1000)

  closeModal(backToWorkModal)
  changeTimerContainerBorder('begin')
}

startButton.addEventListener('click', start)
startNewPomodoro.addEventListener('click', start)

export default start
export {
  setTime,
  setBreak,
  setHours,
  setSeconds,
  setMinutes,
  secondsHTML,
  minutesHTML,
  hoursHTML,
  seconds,
  minutes,
  limitTimeToBreak,
  limitTimeToWork,
  startBreakButton,
  resetTimer
}