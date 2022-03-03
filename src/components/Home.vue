<template>
  <div>
    <form class="form-signin" @submit.prevent="handler()">

        <img class="icon" src="https://raw.githubusercontent.com/bobbylite/realmikefacts/master/img/Real-Mike-Facts-Logo-1.png" width="100" height="100">
        <h1 class="h3 mb-3 fw-normal">Home</h1>
        
        <button class="w-100 btn btn-lg btn-primary" type="submit">Enable Developer Mode</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    post: Function,
    get: Function,
    put: Function,
    options: Function,
    authorizationToken: Object
  }, 
  data() {
      return {
          username: '', 
          password: ''
      }
  },
  methods: {
    async handler()  {
        let response = await fetch('https://api.realmikefacts.com/authorization', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Referrer-Policy': 'no-referrer-when-downgrade',
                'Access-Control-Allow-Origin': 'realmikefacts.com'
            },
            credentials: 'include'
        });
        console.log(response);


        //this.$router.push({name: 'Dev'});
    }
  }
}
</script>

<style scoped>
.icon {
  background-color: #0000;
  border-radius: 50%;
}

.form-signin {
  width: 100%;
  padding: 15px;
  max-width: 330px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
