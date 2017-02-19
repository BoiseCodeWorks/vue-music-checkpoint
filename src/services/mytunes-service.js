import Vue from 'vue'

let myTunes = {}

// THESE ARE SIMPLE HELPER FUNCTIONS TO KEEP YOUR MYTUNES IN LOCAL STORAGE
// WE WILL EVENTUALLY BE REPLACING THESE GUYS BUT NOT TODAY :)
// NOTICE HOWEVER THAT THESE FUNCTIONS ARE NOT GOING TO BE EXPORTED BECAUSE 
// THE COMPONENT SHOULD NEVER BE RESPONSIBLE FOR ACTUALLY CALLING saveMytunes
// PERHAPS YOU SHOULD HAVE THE LIST SAVED WHENEVER IT MUTATES ***CHANGES***
function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))
}

function loadMyTunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {}
}

//loadMytunes()

export default {
  getTracks() { 
    loadMyTunes()
    return myTunes 
  },
  addTrack(track) {
    // OCCASIONALLY YOU WILL RUN INTO ISSUES WHERE VUE WILL BE
    // UNAWARE THAT A CHANGE HAS OCCURED TO YOUR DATA
    // TO ELIMINATE THIS PROBLEM YOU CAN USE
    Vue.set(myTunes, track.trackId, track)
    saveMytunes()
    // YOU CAN READ MORE ABOUT VUE.SET HERE
    // https://vuejs.org/v2/api/#Vue-set
   },
  removeTrack(track) { 
    Vue.delete(myTunes, track.trackId, track)
    saveMytunes()
   },
  promoteTrack(track) { 
    if(track.vote === 1)
    {track.vote = 0}
    else {track.vote = 1}
    saveMytunes()
  },
  demoteTrack(track) { 
    if(track.vote === -1)
    {track.vote = 0}
    else {track.vote = -1}
    saveMytunes()
  }
}