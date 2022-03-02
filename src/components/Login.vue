<template>
  <div>
    <form class="form-signin" @submit.prevent="login()">

        <img class="icon" src="https://raw.githubusercontent.com/bobbylite/realmikefacts/master/img/Real-Mike-Facts-Logo-1.png" width="100" height="100">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
        <a class="w-100 btn btn-lg btn-primary" href="https://real-mike-facts-domain-service.auth.us-east-2.amazoncognito.com/login?client_id=37p0rso5u19lhii15m7m1ls4ne&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://bobbylite.github.io/realmikefacts/">Sign in</a>
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
          username: '', 
          password: ''
      }
  },
  methods: {
    async login()  {
        //console.log("awaiting request...");

        //let getResponse = await this.get("https://nfxoj776ra.execute-api.us-east-2.amazonaws.com/tweets");
        //console.log(getResponse);

        /*let putResponse = await this.put("https://nfxoj776ra.execute-api.us-east-2.amazonaws.com/tweets",
        {
          realmikefacts : '0000000',
          tweetId: 332,
          tweetText: 'This is from vue.js!',
          isDeleted: false
        });
        console.log(putResponse);*/

        //this.$router.push({name: 'Test'});
        var x = this.$route;
        console.log(x);
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
