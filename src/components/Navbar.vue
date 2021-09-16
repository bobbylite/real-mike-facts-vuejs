<template>
    <div>
<!--<div class="collapse" v-bind:class="{show: menuStateHiddenStyle}" id="navbarToggleExternalContent">-->
  <div v-bind:class="{'collapse-animation animate-collapse': collapseStateStyle, 'menu-animation animate-show': showStateStyle}" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-grey h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" v-on:click="toggleClass" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
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
      }
  }
}
</script> 

<style>
.menu-animation {
    position: relative;
    background-color: red;
    animation-name: animate-show;
    animation-duration: .25s;
    animation-iteration-count: 1;
    animation-direction: alternate;
}

@keyframes animate-show {
    0%  {left:500px;}
    100%  {left:0px;}
}

.collapse-animation {
    position: relative;
    background-color: red;
    animation-name: animate-collapse;
    animation-duration: .25s;
    animation-iteration-count: 1;
    animation-direction: alternate;
    left: 600px;
    opacity: 0%;
}

@keyframes animate-collapse {
    0%  {left:0px; opacity:100%;}
    100%  {left:500px; opacity: 0%}
}

</style>