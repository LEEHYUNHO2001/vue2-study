<template>
  <div class="parent">
    <Child :isClick="isClick" @handle-click="handleClick" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Child from "@/components/Child.vue";

@Component({
  components: {
    Child,
  },
})
export default class HomeView extends Vue {
  isClick = false;

  handleClick() {
    this.isClick = !this.isClick;
  }
}
</script>
