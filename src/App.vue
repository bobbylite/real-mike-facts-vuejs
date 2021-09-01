<template>
  <div id="container">
    <login :post="post" :get="get" :put="put" :options="options" :setCookie="setCookie"/>
  </div>
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
      options: this.optionsData,
      setCookie: this.setCookieData
    }
  }, 
  methods: {
    async request(method, url, data) {
        try {
            let response = await fetch(url,
            {
                method: method,
                body: JSON.stringify(data),
                headers: data ? {'Content-Type': 'application/json'} : {}
            });
            console.log(response);
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
    async optionsData(url, data) {
      return await this.request("OPTIONS", url, data);
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
</style>
