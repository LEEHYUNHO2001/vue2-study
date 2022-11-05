<template>
  <li class="todo-item">
    <span class="todo-item-text" :class="toggleItemClass" @click="toggleItem">{{
      item.title
    }}</span>
    <button type="button" @click="removeTodoItem">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { Todo } from "./TodoContainer.vue";

export default Vue.extend({
  name: "TogoItem",
  props: {
    item: {
      type: Object as PropType<Todo>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    toggleItemClass(): string | null {
      return this.item.done ? "complete" : null;
    },
  },

  methods: {
    removeTodoItem() {
      this.$emit("remove", this.index);
    },
    toggleItem() {
      this.$emit("toggle", this.item, this.index);
    },
  },
});
</script>

<style scoped>
.todo-item-text {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
