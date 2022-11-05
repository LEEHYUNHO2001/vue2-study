<template>
  <section class="hello">
    <h1>{{ title }}</h1>
    <todo-input />
  </section>
</template>

<script lang="ts">
import Vue from "vue";

import TodoInput from "./TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
  name: "TodoContainer",
  props: {
    title: String,
  },
});
</script>

<style scoped></style>
