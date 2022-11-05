<template>
  <li class="todo-item">
    <span>{{ item }}</span>
    <button type="button" @click="removeTodoItem">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TogoItem",
  props: {
    item: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeTodoItem() {
      this.$emit("remove", this.index);
    },
  },
});
</script>

<style scoped></style>
