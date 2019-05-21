<template>
  <div id="app">

      <!-- <switch-button label-left="hello" label-right="right"></switch-button> -->
    <header-top></header-top>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from '@/routes';
import Bulb from "@/components/Bulb.vue";
import HeaderTop from "@/components/Header.vue";

export default {
  name: 'app',

  components: {
    Bulb,
    HeaderTop,
  },

  data() {
    return {
      routes: routes.filter(route => typeof route.redirect === 'undefined'),
    };
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  background: #fff;
  font-family: Roboto, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック","メイリオ", sans-serif;
  transition: background .5s;
}

h1,h2,h3,h4,h5,p,a, li, ul {
  color: #333333;
  margin-top: 0;
  transition: color .5s;
  transition-delay: .3s;
}

.d-flex {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.flex-row {
  flex-direction: row;
}
.flex-column {
  flex-direction: column;
}
.container {
  max-width: 800px;
  width: calc(100% - 50px);
  margin: 0 auto;
  padding: 0 25px;
  padding-bottom: 30px;
}
body.is-dark {
  background: #121212;

  h1,h2,h3,h4,h5,p,a {
    color: white;
  }
}
</style>
