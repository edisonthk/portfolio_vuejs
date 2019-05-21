<template>
  <div class="bulb" v-on:click="toggleSwitch">
    <img v-if="isLight" src="@/assets/bulb_light.svg">
    <img v-if="!isLight" src="@/assets/bulb_dark.svg">
  </div>
</template>

<script>
export default {
  name: 'Bulb',
  props: {
  },
  data() {
    return {
      isLight: true,
    };
  },
  mounted() {
    this.updateView();
  },
  methods: {
    toggleSwitch() {
      this.isLight = !this.isLight;
      this.updateView();
    },

    updateView() {
      if(this.isLight) {
        document.body.className = document.body.className.replace(/is-dark/g,"");
      } else {
        document.body.className += " is-dark";
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bulb {
  width: 50px;
  height: 50px;

  > img {
    display: block;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
