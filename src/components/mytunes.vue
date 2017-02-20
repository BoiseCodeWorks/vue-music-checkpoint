<template>
  <div class="mytunes">
    
<!--<div>
    
    <button type="submit" @submit.prevent="search"> Add songs </button>
</div> -->

<!--// list mytunes -->
  <div v-for="myTune in myTunes" >
     <div >
            <!--<div class = "img-container">
              <img v-bind:src="song.artworkUrl60" >
                      
                    </div>-->
                    
            {{myTune.trackName}}, 
            <!--{{song.artistName}}, {{song.collectionName}}, {{song.collectionPrice}},-->
            
            <!--<button type="submit" @click="addSong(song)" class="black">Add</button>-->
      </div>
    </div>



  </div>
</template>



<script>
import itunesService from '../services/itunes-service'
import myTunesService from '../services/mytunes-service'

export default {
  name: 'mytunes',
  components:  {},
  props: myTunes,
              
  data () {
    return {
      query: '',
      myTunes: myTunesService.getTracks(),
      songList: {},
      songs: []
    }
  },
  methods: {
     search() {
        itunesService.getMusicByArtist(this.query).then(res => {
          this.songs = res.results
          console.log(res.results)
          myTunes= myTunesService.getTracks()
        })
      },

    addSong(x) {
          myTunesService.addTrack(x)
          console.log(x)
    }
  },
  mounted(){
      console.log(this.song)
  }
  }

</script>
