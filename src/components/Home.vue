<template>
  <div class="home">
    <!--<div class="container">-->
      <div class="row">
        <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
        <Itunes class="col s7 wide"></Itunes>
        <MyTunes class="col s5 wide"></MyTunes>
      </div>
      <!--</div>-->
  </div>
</template>

<script>
  import MyTunes from './MyTunes.vue'
  import Itunes from './Itunes.vue'

  export default {
    name: 'home',
    components: { MyTunes, Itunes },
    data() {
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
  /*.mytunes{
  display: inline-block;
  min-width: 45%;
  max-width: 45%;
}
  .itunes{
  display: inline-block;
  min-width: 55%;
  max-width: 55%;
}*/
</style>