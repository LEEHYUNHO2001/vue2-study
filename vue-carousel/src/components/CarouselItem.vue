<template>
  <div>
    <img :src="item.SRC" :alt="`${item.TITLE}이미지`" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { CarouselItemType } from "@/types";

@Component
export default class CarouselItem extends Vue {
  @Prop() public item!: CarouselItemType;
}
</script>

<style scoped lang="scss">
.title {
  font-size: 26px;
  font-weight: 700;
  color: $red;
}
</style>
