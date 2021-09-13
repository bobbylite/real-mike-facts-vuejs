<template>
  <div>
    <form class="form-signin" @submit.prevent="login()">

        <img class="icon" src="https://raw.githubusercontent.com/bobbylite/realmikefacts/master/img/Real-Mike-Facts-Logo-1.png" width="100" height="100">
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
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    post: Function,
    get: Function,
    put: Function,
    options: Function
  }, 
  data() {
      return {
          username: '', 
          password: ''
      }
  },
  methods: {
    async login()  {
        console.log("awaiting request...");

        let getResponse = await this.get("https://nfxoj776ra.execute-api.us-east-2.amazonaws.com/tweets");
        console.log(getResponse);

        let putResponse = await this.put("https://nfxoj776ra.execute-api.us-east-2.amazonaws.com/tweets",
        {
          realmikefacts : '0000000',
          tweetId: 332,
          tweetText: 'This is from vue.js!',
          isDeleted: false
        });
        console.log(putResponse);

        this.$router.push({name: 'Test'});
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
  max-width: 330px;
  height: 100%;
  padding: 0px;
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
