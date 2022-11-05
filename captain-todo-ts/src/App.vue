<template>
  <div id="app">
    <TodoContainer msg="Vue2 TypeScript Functional Todo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoContainer from "./components/TodoContainer.vue";

export default Vue.extend({
  name: "App",
  components: {
    TodoContainer,
  },
});
</script>

<style>
@import url("@/assets/style/reset.css");
</style>
