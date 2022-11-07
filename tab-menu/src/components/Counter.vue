<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Counter",
  data() {
    return {
      title: "Counter",
    };
  },
});
</script>

<style scoped></style>
