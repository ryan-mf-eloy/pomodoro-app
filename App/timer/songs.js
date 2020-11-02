const timerSong = document.querySelector('.timer-audio')
const completeSong = document.querySelector('.complete-audio')

const playTimerSong = () => {
  timerSong.load()
  timerSong.play()
}

const playCongratulationsSong = () => {
  completeSong.load()
  completeSong.play()
}

export { playCongratulationsSong, playTimerSong }