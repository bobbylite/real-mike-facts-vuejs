<template>
    <div>
        <nav class="navbar navbar-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" v-on:click="toggleClass" @focus="focusReturn">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <div v-bind:class="{'collapse-animation animate-collapse': collapseStateStyle, 'menu-animation animate-show': showStateStyle}" id="home">
            <div class="bg-dark">
                <h5 class="text-grey">Collapsed content</h5>
                <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
        </div>
        <div v-bind:class="{'collapse-animation animate-collapse': collapseStateStyle, 'menu-animation animate-show': showStateStyle}" id="about">
            <div class="bg-dark">
                <h5 class="text-grey">Collapsed content v2</h5>
                <span class="text-muted">Toggleable via the navbar brand v2.</span>
            </div>
        </div>
        <div class="bg-dark" id="spacing">
        </div>
    </div>
</template> 

<script>
export default {
  name: 'Navbar',
  props: {
  }, 
  data() {
      return {
          showStateStyle: true,
          collapseStateStyle: false
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
  }
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