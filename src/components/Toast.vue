<template>
    <div v-bind:class="{'h8 mb-8 fw-normal toast-location': toastLocationStyle}">
        <div v-bind:class="{'toast-style': toastStyle}" v-html="GetMessage"></div>
    </div>
</template> 

<script>
export default {
  name: 'Toast',
  props: {
      GetMessage: String
  },
  data() {
      return {
          showStateStyle: true,
          collapseStateStyle: false,
          toastLocationStyle: true,
          toastStyle: true,
          awsMessage: this.Message
      }
  },
  methods: {
    toggleClass: function(event) {
        console.log(event);
        this.showStateStyle = !this.showStateStyle;
        this.collapseStateStyle = !this.collapseStateStyle;
    },
    sleep: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    focusReturn: async function() {
        await this.sleep(100);
        document.activeElement.blur();
    }
  }, 
  mounted: function() {

  },
}
</script> 

<style>
@keyframes animate-show {
    0%  {left:500px;}
    100%  {left:0px;}
}

@keyframes animate-collapse {
    0%  {left:0px; opacity:100%; visibility: visible;}
    100%  {left:500px; opacity: 0%; visibility: visible;}
}

.toast-style {
    height: 50px;
    width: 250px;
    background-color: #27ae60;
    color: #fff;
    margin: auto;
    padding: 12px;
    border: 1px solid #27ae60;
    border-radius: 10px;
}

.toast-location {
    align-items: center;
    margin-top: 30%;
}

.menu-animation {
    position: relative;
    animation-name: animate-show;
    animation-duration: .25s;
    animation-iteration-count: 1;
    animation-direction: alternate;
    left: 0px;
    display: flex;
    padding-right: 10px;
}

.collapse-animation {
    position: relative;
    animation-name: animate-collapse;
    animation-duration: .25s;
    animation-iteration-count: 1;
    animation-direction: alternate;
    left: 0px;
    opacity: 0%;
    visibility: hidden;
}
</style>