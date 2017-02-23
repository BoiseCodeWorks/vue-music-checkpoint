<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <Itunes class="itunes"></Itunes>
    <MyTunes class="my-tunes"></MyTunes>
  </div>
</template>

<script>
import Itunes from './Itunes'
import MyTunes from './MyTunes'
import itunesService from '../services/itunes-service'
import myTunesService from "../services/mytunes-service"

export default {
  name: 'home',
  components: {Itunes, MyTunes},
  data () {
    return {
      
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
.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: black;
}

.itunes{
  display: inline-block;
  background: darkred;
  min-height: 500px;
  min-width: 45%;
}

</style>
