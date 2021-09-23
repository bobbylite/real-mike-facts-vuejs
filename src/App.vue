<template>
  <div id="container">
      <Navbar class="navbar" />
      <div id="container">
        <router-view />
      </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {

    }
  }
}
</script>

<style>
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-content: center;
  align-self: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
#container {
  display: inline-block;
  align-items: center;
  align-self: center;
  height: 100%;
  width: 100%;
}
#router-view {
  display: none;
}
</style>
