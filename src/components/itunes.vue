<template>
  <div class="itunes">
    

 
  <div v-for="song in songs" >
     <div >
            <div class = "img-container">
              <img v-bind:src="song.artworkUrl60" >
                      
                    </div>
                    
            {{song.trackName}}, 
            {{song.artistName}}, {{song.collectionName}}, {{song.collectionPrice}},
            
            <button type="submit" @click="addSong(song)" class="black">Add</button>
      </div>
    </div>


  </div>
</template>


<script>
  import itunesService from '../services/itunes-service'
  import myTunesService from '../services/mytunes-service'



export default {
  name: 'itunes',

 props: {
     songs: {
         type: Array,
         required: true
             }
 },
              
  data () {
    return {
        // query: '',
        myTunes: myTunesService.getTracks()
        // songList: itunesService.getMySongs(),
        // songs: [],
        // itunesList: itunesService.getAllSongs()
       
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
