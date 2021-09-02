<template>
  <div id="container">
    <div id="nav">
      <router-link to="/aws-test">Test</router-link> |
      <router-link to="/">Login</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-content: center;
  align-self: center;
  align-items: center;
  margin-top: 100px;
}
#container {
  display: inline-block;
  align-items: center;
  align-self: center;
}
#nav {
  display: none;
}
</style>
