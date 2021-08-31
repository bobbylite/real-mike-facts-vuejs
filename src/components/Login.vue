<template>
    <form class="form-signin" @submit.prevent="login()">

        <img class="mb-4" src="/img/Real-Mike-Facts-Logo-1.png" alt="" width="100" height="100">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
        <div class="form-floating">
            <input type="email" v-model="username" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

    </form>
</template>

<script>
export default {
  name: 'Login',
  props: {
    post: Function,
    get: Function,
    setCookie: Function
  }, 
  data() {
      return {
          username: '', 
          password: ''
      }
  },
  methods: {
    async login()  {
      let response = await this.post("https://reqres.in/api/login", {
            email: this.username, 
            password: this.password
        });

        this.setCookie(response);

        console.log(response);
    }
  }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  position: absolute;
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
