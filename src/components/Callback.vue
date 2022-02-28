<template>
  <div>
    <form class="form-signin">

        <img class="icon" src="https://raw.githubusercontent.com/bobbylite/realmikefacts/master/img/Real-Mike-Facts-Logo-1.png" width="100" height="100">
        <h1 class="h3 mb-3 fw-normal">Logging in...</h1>
        
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    post: Function,
    get: Function,
    put: Function,
    options: Function,
    authorizationToken: Object
  }, 
  data() {
      return {
      }
  },
  methods: {
      CreateCookie: function(someparam1, somparam2) {
          // Create AWS Lambda function that returns a "server side" HTTP only cookie and set that. 
          let cleanIdToken = this.$route.params.id_token.split('=')[1];
          this.post()
      },
      onComponentLoad: function() {
          this.CreateCookie()
          this.$router.push({name: 'Test', params: {}});
      },
      mounted: function() {
          this.onComponentLoad()
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
