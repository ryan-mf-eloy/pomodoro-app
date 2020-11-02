import {
  applyBoxShadow,
  isTimeHalf,
  isTimeEnding 
} from '../helpers.js'

import { limitTimeToBreak, limitTimeToWork } from './start.js'
import { stopConfetti } from '../libs/confetti.js'
import { playCongratulationsSong } from  './songs.js'

const overlay = document.querySelector('.overlay')
const congratulationsModal = document.querySelector('.congratulations')
const backToWorkModal = document.querySelector('.back-to-work')
const startBreakButton = document.querySelector('.start-break')

const openModal = modal => {
  overlay.classList.remove('close')
  modal.classList.remove('close')
  modal.classList.add('open')
  playCongratulationsSong()
}

const closeModal = () => {
  overlay.classList.add('close')
  backToWorkModal.classList.add('close')
  congratulationsModal.classList.add('close')

  stopConfetti()
}
startBreakButton.addEventListener('click', closeModal)

const changeTimerContainerBorder = timeStatus =>
    timeStatus === 'begin'
  ? applyBoxShadow('rgba(67, 181, 129, 0.5)')
  : timeStatus === 'half'
  ? applyBoxShadow('rgba(242, 177, 57, 0.5)')
  : timeStatus === 'ending'
  ? applyBoxShadow('rgba(250, 71, 76, 0.5)')
  : applyBoxShadow('rgba(0, 0, 0, 0.04)')

const controllerTimerBorderColor = (minutes, totalTime) => {
  const isHalfTime = isTimeHalf(minutes, totalTime)
  const isEndingTime = isTimeEnding(minutes, totalTime)

  if(isEndingTime) return changeTimerContainerBorder('ending')
  if(isHalfTime) return changeTimerContainerBorder('half')
}

const defineTimerBorderController = (setBreak, minutes) => setBreak
  ? controllerTimerBorderColor(minutes, limitTimeToBreak)
  : controllerTimerBorderColor(minutes, limitTimeToWork)

export {
  openModal,
  closeModal,
  congratulationsModal,
  backToWorkModal,
  changeTimerContainerBorder,
  defineTimerBorderController
}