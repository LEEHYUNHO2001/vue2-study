<template>
  <div id="app">
    <HelloWorld msg="Vue2 Class + TS + SCSS" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/styles/reset.css";
</style>
