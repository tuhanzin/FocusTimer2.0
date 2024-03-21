import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'

import * as events from './events.js'


//variavel minutes e seconds
let minutes = 0
let seconds = 0
//botão play pause
export function toggleRun() {
  state.isRunning = document.documentElement.classList.toggle('running')
  togglePlay()
  timer.countdown()

}
//botão stop
export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  stopTimer()
  timer.updateDisplay()
  minutes = 0
  seconds = 0
}
//botão +
export function sum() {

  minutes = minutes + 5
  timer.updateDisplay(minutes, 0)
}
//botão -
export function sub() {
  if ( minutes <= 5 ) {
    return
}
minutes = minutes - 5
timer.updateDisplay(minutes, seconds)

}


//toggle play e pause
const togglePlay = function() {
  el.playButton.classList.toggle('toggle')
  el.pauseButton.classList.toggle('toggle')
}

const stopTimer = () => {
  el.playButton.classList.remove('toggle')
  el.pauseButton.classList.add('toggle')
}

//musica florestas
export function forestPlay() {
  events.forestMusic()
}

export function rainPlay() {
  events.rainMusic()
}

export function firePlay() {
  events.fireMusic()
}

export function storePlay() {
  events.storeMusic()
}