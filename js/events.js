import { controls, forest, rain, store, campfire } from './elements.js'
import * as actions from './actions.js'
import * as sounds from './sounds.js'


 export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
}

export function forestMusic() {

  forest.classList.toggle('music-on')

  return sounds.forestAudio.paused ? sounds.forestAudio.play() : sounds.forestAudio.pause();
}

export function rainMusic() {

  rain.classList.toggle('music-on')

  return sounds.rainAudio.paused ? sounds.rainAudio.play() : sounds.rainAudio.pause();
}

export function fireMusic() {

  campfire.classList.toggle('music-on')

  return sounds.fireAudio.paused ? sounds.fireAudio.play() : sounds.fireAudio.pause();
}

export function storeMusic() {

  store.classList.toggle('music-on')

  return sounds.storeAudio.paused ? sounds.storeAudio.play() : sounds.storeAudio.pause();
}
