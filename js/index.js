import state from "./state.js"
import * as events from './events.js'
import * as timer from './timer.js'
import * as audio from './sounds.js'
import * as el from './elements.js'
import { firePlay, forestPlay, rainPlay, storePlay } from "./actions.js"

export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  timer.updateDisplay(0, 0)
  events.registerControls()
}


el.forest.addEventListener('click', () => {
  forestPlay()
})

el.rain.addEventListener('click', () => {
  rainPlay()
})

el.campfire.addEventListener('click', () => {
  firePlay()
})

el.store.addEventListener('click', () => {
  storePlay()
})
