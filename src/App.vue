<template>
  <div id="app">
    test- is this working?
    
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'
import itunesService from './services/itunes-service'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
</style>
