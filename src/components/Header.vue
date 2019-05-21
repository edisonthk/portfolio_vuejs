<template>
  <div class="header">
    <bulb></bulb>
  </div>
</template>

<script>
import Bulb from "@/components/Bulb.vue";

export default {
  name: 'Header',
  components: {
    Bulb,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';

.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 170px;
  padding: 10px;
}

@media (max-width: $sp-width) {
  .header {
    height: 108px;
  }
}
</style>
