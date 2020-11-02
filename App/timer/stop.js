import { setTime, setBreak, resetTimer } from './start.js'
import { clearTimes } from '../helpers.js'
import { changeTimerContainerBorder } from './animations.js';

const stopButton = document.querySelector('.stop-button')

const stop = (callback, stopAll) => {
  clearInterval(setTime)
  clearInterval(setBreak)

 if(stopAll) resetTimer()

 clearTimes()
 changeTimerContainerBorder('inative')
 callback && callback()
}
stopButton.addEventListener('click', () => stop(false, true))

export default stop