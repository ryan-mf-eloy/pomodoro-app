import { setTime, setBreak } from './start.js'

const pauseButton = document.querySelector('.pause-button')

const pause = () => {
  setTime && clearInterval(setTime)
  setBreak && clearInterval(setBreak)
}

pauseButton.addEventListener('click', pause)

export default pause