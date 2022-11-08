<template>
  <li>
    <img :src="item.SRC" :alt="`${item.TITLE}이미지`" />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface Props {
  ID: string;
  SRC: string;
  TITLE: string;
}

@Component
export default class CarouselItem extends Vue {
  @Prop() public item!: Props;
}
</script>

<style scoped lang="scss">
.title {
  font-size: 26px;
  font-weight: 700;
  color: $red;
}
</style>
