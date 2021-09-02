<template>
    <form class="form-signin" @submit.prevent="awsRequest()">

        <img class="mb-4" src="https://raw.githubusercontent.com/bobbylite/realmikefacts/master/img/Real-Mike-Facts-Logo-1.png" alt="" width="100" height="100">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="sample tweet">
            <label for="floatingInput">Tweet</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">Make AWS Request</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

    </form>
</template>

<script>
export default {
  name: 'Test',
  props: {
    post: Function,
    get: Function,
    put: Function,
    options: Function
  }, 
  data() {
      return {
      }
  },
  methods: {
    async awsRequest()  {
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
        console.log(putResponse)
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