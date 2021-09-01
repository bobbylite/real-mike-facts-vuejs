<template>
  <login :post="post" :get="get" :put="put" :setCookie="setCookie"/>
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
      put: this.putData,
      setCookie: this.setCookieData
    }
  }, 
  methods: {
    async request(method, url, data) {
        try {
            let response = await fetch(url, {
                method: method,
                body: JSON.stringify(data),
                headers: data ? {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'} : {}
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
    async putData(url, data) {
      return await this.request("PUT", url, data);
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
