<template>
  <login :post="post" :get="get" :setCookie="setCookie"/>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  },
  data() {
    return {
      post: this.postData,
      get: this.getData,
      setCookie: this.setCookieData
    }
  }, 
  methods: {
    async request(method, url, data) {
        try {
            let response = await fetch(url, {
                method: method,
                body: JSON.stringify(data),
                headers: data ? {'Content-Type': 'application/json'} : {}
            });

            return response.json();
        } catch (err) {
            throw new Error(err);
        }
    },
    async getData(url) {
        return await this.request("GET", url);
    },
    async postData(url, data) {
        return await this.request("POST", url, data);
    }, 
    setCookieData(data) {
      Document.cookie = 'access_token=' + data.token;
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
}
</style>
