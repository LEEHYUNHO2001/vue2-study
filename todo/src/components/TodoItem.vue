<template>
  <div class="mt-3">
    <input type="checkbox" :checked="todoItem.checked" />
    <span class="m-3">{{ todoItem.text }}</span>
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
};
</script>

<style></style>
