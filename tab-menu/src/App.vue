<template>
  <div id="app">
    <TabMenu />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TabMenu from "./components/TabMenu.vue";

export default Vue.extend({
  name: "App",
  components: {
    TabMenu,
  },
});
</script>

<style>
@import url("@/assets/style/reset.css");
</style>
