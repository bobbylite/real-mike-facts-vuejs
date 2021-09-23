<template>
  <div>
    <form class="form-signin" @submit.prevent="awsRequest()">

        <img class="icon" src="https://raw.githubusercontent.com/bobbylite/realmikefacts/master/img/Real-Mike-Facts-Logo-1.png" alt="" width="100" height="100">
        <h1 class="h3 mb-3 fw-normal">Development Options</h1>
        
        <div class="form-floating">
            <input type="number" v-model="tweetId" class="form-control" id="floatingInput" placeholder="sample tweet">
            <label for="floatingInput">Tweet ID</label>
        </div>
        <br/>
        <div class="form-floating">
            <input type="text" v-model="tweetText" class="form-control" id="floatingInput" placeholder="sample tweet">
            <label for="floatingInput">Tweet</label>
        </div>
        <br/>
        <br/>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Make AWS Request</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

    </form>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    id_token: String,
    access_token: String,
    expires_in: String,
    token_type: String,
    post: Function,
    get: Function,
    put: Function,
    options: Function
  }, 
  data() {
      return {
          tweetText: '',
          tweetId: ''
      }
  },
  methods: {
    async awsRequest() {
        console.log(this.$route.params.id_token);
        let getResponse = await this.get("ljflskdjflk", "https://nfxoj776ra.execute-api.us-east-2.amazonaws.com/tweets");
        console.log(getResponse);

        /*let putResponse = await this.put("https://nfxoj776ra.execute-api.us-east-2.amazonaws.com/tweets",
        {
          realmikefacts : 'https://bobbylite.github.io/realmikefacts/',
          tweetId: this.tweetId,
          tweetText: this.tweetText,
          isDeleted: false
        });
        console.log(putResponse);*/

        console.log(this.$route.params.id_token);
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
  padding: 15px;
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