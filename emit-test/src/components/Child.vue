<template>
  <div class="child">
    <button @click="handleClick">{{ isClick }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private isClick?: boolean;
  @Emit("handle-click")
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleClick() {}
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
