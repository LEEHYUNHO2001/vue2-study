<template>
  <div class="hello">
    <header>
      <h1 class="title">{{ title }}</h1>
    </header>
    <button type="button" @click="prevCarouselIndex">prev</button>
    <ul class="carousel-container">
      <CarouselItem
        v-for="item in carouselData"
        :key="item.SRC"
        :item="item"
        :style="{ transform: `translate3d(-${1060 * carouselIndex}px, 0, 0)` }"
      />
    </ul>
    <button type="button" @click="nextCarouselIndex">next</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { carouselData } from "@/constants";

import CarouselItem from "./CarouselItem.vue";

@Component({
  components: {
    CarouselItem,
  },
})
export default class CarouselContainer extends Vue {
  @Prop() public title!: string;
  carouselData = carouselData;
  carouselIndex = 0;
  autoCarousel?: ReturnType<typeof setInterval>;

  nextCarouselIndex() {
    this.carouselIndex = ++this.carouselIndex;
  }
  prevCarouselIndex() {
    this.carouselIndex = --this.carouselIndex;
  }
  autoCarouselIndex() {
    this.autoCarousel = setInterval(this.nextCarouselIndex, 1000);
  }

  mounted() {
    this.autoCarouselIndex();
  }
  beforeDestroy() {
    clearInterval(this.autoCarousel);
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 26px;
  font-weight: 700;
  color: $red;
}
.carousel-container {
  overflow: hidden;
  display: flex;
  width: 1060px;
  height: 300px;
}
</style>
