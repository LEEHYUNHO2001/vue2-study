<template>
  <div class="hello">
    <header>
      <h1 class="title">{{ msg }}</h1>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.title {
  font-size: 26px;
  font-weight: 700;
  color: $red;
}
</style>
