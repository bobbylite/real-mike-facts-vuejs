<template>
    <div>
        <div v-bind:class="{
                'collapse-animation animate-collapse': collapseStateStyle, 
                'menu-animation animate-show': showStateStyle
            }"
            id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
            <h5 class="text-grey h4">Collapsed content</h5>
            <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
        </div>
        <nav class="navbar navbar-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" v-on:click="toggleClass" @focus="focusReturn">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </div>
</template> 

<script>
export default {
  name: 'Navbar',
  props: {
  }, 
  data() {
      return {
          showStateStyle: false,
          collapseStateStyle: true
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
.menu-animation {
    position: relative;
    animation-name: animate-show;
    animation-duration: .25s;
    animation-iteration-count: 1;
    animation-direction: alternate;
}

.collapse-animation {
    position: relative;
    animation-name: animate-collapse;
    animation-duration: .25s;
    animation-iteration-count: 1;
    animation-direction: alternate;
    left: 600px;
    opacity: 0%;
}

@keyframes animate-show {
    0%  {left:500px;}
    100%  {left:0px;}
}

@keyframes animate-collapse {
    0%  {left:0px; opacity:100%;}
    100%  {left:500px; opacity: 0%}
}
</style>