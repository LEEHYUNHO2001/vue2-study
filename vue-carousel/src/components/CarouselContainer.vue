<template>
  <div class="hello">
    <header>
      <h1 class="title">{{ title }}</h1>
    </header>
    <div class="btn-container">
      <button type="button" @click="prevCarouselIndex">prev</button>
      <button type="button" @click="nextCarouselIndex">next</button>
    </div>
    <div class="carousel-container-wrap">
      <div class="carousel-contaienr" :style="carouselContainerWrap">
        <ul class="carousel-container-list" :style="carouselContainerList">
          <li :key="newId" v-for="{ staticIndex, newId } in staticCarouselData">
            <CarouselItem :item="carouselData[staticIndex]" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { carouselData } from "@/constants";

import CarouselItem from "./CarouselItem.vue";

interface StaticCarousel {
  staticIndex: number;
  newId: number;
}

@Component({
  components: {
    CarouselItem,
  },
})
export default class CarouselContainer extends Vue {
  @Prop() public title!: string;
  carouselData = carouselData;
  staticCarouselData?: StaticCarousel[];
  carouselIndex = 0;
  autoCarousel?: ReturnType<typeof setInterval>;

  get carouselContainerWrap() {
    return {
      transform: `translateX(${-11660 - 1060 * this.carouselIndex}px)`,
      transition: "1s",
    };
  }
  get carouselContainerList() {
    return { transform: `translateX(${1060 * this.carouselIndex}px)` };
  }

  staticCarousel() {
    const newData = Array(carouselData.length * 2 + 1)
      .fill(1)
      .map((_, i) => {
        const newId = this.carouselIndex + i - carouselData.length;
        return {
          staticIndex: this.getStaticIndex(newId),
          newId,
        };
      });
    this.staticCarouselData = newData;
  }
  getStaticIndex(newId: number) {
    let rest = newId % carouselData.length;
    if (rest < 0) {
      rest += carouselData.length;
    }
    return rest;
  }
  nextCarouselIndex() {
    this.carouselIndex = ++this.carouselIndex;
  }
  prevCarouselIndex() {
    this.carouselIndex = --this.carouselIndex;
  }
  autoCarouselIndex() {
    this.autoCarousel = setInterval(this.nextCarouselIndex, 2000);
  }

  created() {
    this.staticCarousel();
  }
  mounted() {
    this.autoCarouselIndex();
  }
  beforeDestroy() {
    clearInterval(this.autoCarousel);
  }
  beforeUpdate() {
    console.log(this.staticCarouselData, this.carouselIndex);
    this.staticCarousel();
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 26px;
  font-weight: 700;
  color: $red;
}
.carousel-container-wrap {
  overflow: hidden;
  width: 1060px;
  height: 300px;
}
.carousel-container-list {
  display: flex;
  width: 1060px;
  height: 300px;
}
.btn-container {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
}
</style>
