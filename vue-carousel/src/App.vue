<template>
  <div id="app">
    <CarouselContainer title="Vue2 Class + TS + SCSS + Carousel" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import CarouselContainer from "./components/CarouselContainer.vue";

@Component({
  components: {
    CarouselContainer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/styles/reset.css";
</style>
