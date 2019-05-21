<template>
  <div class="layout" :class="show ? 'show' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ExtendPage',

  mounted() {
    window.scrollTo(0,0);
    setTimeout(() => {
      this.show = true;
    }, 500);
  },

  data() {
    return {
      show: false,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  opacity: 0;
  transition: all .5s ease-in-out;
}
.show {
  opacity: 1;
}
</style>
