<template>
  <div>
      <Navbar class="navbar" />
      <div id="container">
      <div id="router-view">
        <router-link to="/">Test</router-link> |
        <router-link to="/">Login</router-link>
      </div>
    </div>
    <router-view />
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
}
#container {
  display: inline-block;
  align-items: center;
  align-self: center;
}
#router-view {
  display: none;
}
</style>
