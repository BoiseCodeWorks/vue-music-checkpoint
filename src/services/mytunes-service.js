import Vue from 'vue'

let myTunes = {}
// let mySelection = []

// function saveMySelection(track){
//   mySelection.push(track)
//   saveMytunes()
// }

// THESE ARE SIMPLE HELPER FUNCTIONS TO KEEP YOUR MYTUNES IN LOCAL STORAGE
// WE WILL EVENTUALLY BE REPLACING THESE GUYS BUT NOT TODAY :)
// NOTICE HOWEVER THAT THESE FUNCTIONS ARE NOT GOING TO BE EXPORTED BECAUSE 
// THE COMPONENT SHOULD NEVER BE RESPONSIBLE FOR ACTUALLY CALLING saveMytunes
// PERHAPS YOU SHOULD HAVE THE LIST SAVED WHENEVER IT MUTATES ***CHANGES***
function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))
}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {}
}

loadMytunes()

export default {
  getTracks() {
    loadMytunes()
    return myTunes
  },
  addTrack(track) {
    myTunes[track.id] = track 
    track.isThere = true
    track.demote = 0
    track.promote = 1
    // saveMySelection(track)
    // OCCASIONALLY YOU WILL RUN INTO ISSUES WHERE VUE WILL BE
    // UNAWARE THAT A CHANGE HAS OCCURED TO YOUR DATA
    // TO ELIMINATE THIS PROBLEM YOU CAN USE
    Vue.set(myTunes, track.id, track)
    saveMytunes()
    // YOU CAN READ MORE ABOUT VUE.SET HERE
    // https://vuejs.org/v2/api/#Vue-set
  },
  removeTrack(track) {
    track.isThere = false
    Vue.delete(myTunes, track.id)
    saveMytunes()
    loadMytunes()
  },
  promoteTrack(track) {
    track.promote += 1
    Vue.set(myTunes,track.id,track)
    saveMytunes()

  },
  demoteTrack(track) {
    track.demote += 1
    Vue.set(myTunes,track.id,track)
    saveMytunes()
  }
}
