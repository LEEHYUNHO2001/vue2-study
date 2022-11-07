<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "InputName",
  data() {
    return {
      title: "InputName",
    };
  },
});
</script>

<style scoped></style>
