<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->

    <div class="col-sm-12">
      <form @submit.prevent="search">
        <input type="text" v-model="query">
        <button type="submit">Find</button>
      </form>
    </div>


      <itunes  :songs="songs" class="itunes"></itunes>
    <!--<mytunes :myTunes="myTunes" class="mytunes">        </my-tunes>-->
      


    <!--<div v-for="song in songs">
      <div class="row row-padding">
        <div class="col-md-3" id="formatsongs">
          <div @click="addSong(song)">
            {{song.trackName}}, {{song.artistName}}, {{song.collectionName}}, {{song.collectionPrice}},
          </div>
        </div>
      </div>
    </div>-->

  </div>
</template>



<script>
  import itunesService from '../services/itunes-service'
  import myTunesService from '../services/mytunes-service'
  import itunes from './itunes'
  import mytunes from './mytunes'

  export default {
    name: 'home',
    components: { itunes, mytunes },

    data() {
      return {
        query: '',
        myTunes: myTunesService.getMySongs(),
        songList: itunesService.getMySongs(),
        songs: [],
        
       
      }
    },

    methods: {
      search() {
        var vm = this
        itunesService.getMusicByArtist(this.query).then(res => {
          vm.songs = res.results
          // console.log(vm.songs)
        })
      },

      getTracks() {

      },
      addSong(x) {
          itunesService.addSong(x)
      },
      saveMyTunes() {

      },
      removeTrack() {

      },
      promoteTrack() {

      },
      demoteTrack() {

      }
    }
  }

</script>


<style>
  /**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/
  
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: purple;
  }
  
  .itunes {
    display: inline-block;
    background:firebrick;
    min-height: 500px;
    min-width: 45%;
    color: whitesmoke;
  }
  
  .formatsongs {
    /*height: 100%;*/
    width: 63%;
    border: 5px solid red;
    /*display: flex;*/
    justify-content: space-around;
    align-items: flex-end;
    padding: 8px;
    border-radius: 10px;
    float: left;
    margin: 2%;
    margin-left: 18%;
  }
  
  .row-padding {
    padding-top: 25;
  }

  .black{
    color:black;
  }

</style>