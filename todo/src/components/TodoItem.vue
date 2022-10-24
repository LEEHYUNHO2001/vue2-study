<template>
  <div class="mt-3">
    <input type="checkbox" :checked="todoItem.checked" @change="toggleCheck" />
    <span
      class="m-3"
      :class="todoItem.checked && 'text-muted'"
      :style="todoItem.checked && 'text-decoration:line-through'"
    >
      {{ todoItem.text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    todoItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheck(e) {
      this.$emit("toggle-check", {
        id: this.todoItem.id,
        checked: e.target.checked,
      });
    },
  },
};
</script>

<style></style>
