<template>
  <div>
    <form class="form-signin" @submit.prevent="awsRequest()">

        <img class="icon" src="https://raw.githubusercontent.com/bobbylite/realmikefacts/master/img/Real-Mike-Facts-Logo-1.png" alt="" width="100" height="100">
        <h1 class="h3 mb-3 fw-normal">Development Options</h1>
        
        <div class="form-floating">
            <input type="number" v-model="tweetId" class="form-control" id="floating-id-Input" placeholder="sample tweet">
            <label for="floatingInput">Tweet ID</label>
        </div>
        <br/>
        <div class="form-floating">
            <input type="text" v-model="tweetText" class="form-control" id="floating-tweet-Input" placeholder="sample tweet">
            <label for="floatingInput">Tweet</label>
        </div>
        <br/>
        <br/>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Make AWS Request</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
    <Toast :GetMessage="AwsMessage" />
  </div>
</template>

<script>
import Toast from "./Toast.vue"

export default {
  name: 'home',
  components: {
    Toast
  },
  props: {
    post: Function,
    get: Function,
    put: Function,
    options: Function
  }, 
  data() {
      return {
          tweetText: '',
          tweetId: '',
          AwsMessage: '',
      }
  },
  methods: {
    async awsRequest() {
        let cleanIdToken = this.$route.params.id_token.split('=')[1];
        var getResponse = {};

        try {
          getResponse = await this.get(
            "https://nfxoj776ra.execute-api.us-east-2.amazonaws.com/tweets",
            cleanIdToken
          );

          console.log(getResponse);

          if (getResponse.message && getResponse.message === 'Unauthorized')
            this.$router.push({ name: 'login', path: '/login', params: { id_token: cleanIdToken } });
          else
            this.SendToast(getResponse.Message.Items[3].tweetText);

          let putResponse = await this.put(
          "https://nfxoj776ra.execute-api.us-east-2.amazonaws.com/tweets",
          cleanIdToken ,
          {
            realmikefacts : 'https://bobbylite.github.io/realmikefacts/',
            tweetId: this.tweetId,
            tweetText: this.tweetText,
            isDeleted: false
          });

          console.log(putResponse);
        }
        catch(err) {
          console.log(err);
        }
    },
    getToken() {
      return this.$route.params.id_token.split('=')[1];
    },
    async OnComponentLoad() {
      try {
        let getResponse = await this.get(
              "https://nfxoj776ra.execute-api.us-east-2.amazonaws.com/tweets",
              this.getToken()
            );

        let text = getResponse.Message.Items[3].tweetText;
        console.log(text);
      } catch (err) {
        console.log(err);
      }
    }, 
    SendToast(toastMessage) {
      this.AwsMessage = 'AWS Replaced Tweet: ' + toastMessage;
    }
  },
  mounted: function() {
    this.OnComponentLoad();
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