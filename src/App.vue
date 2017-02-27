<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view> 
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home,
    Navbar
  }
}
</script>

<style>
</style>
