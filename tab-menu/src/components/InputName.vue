<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <div class="input-name-container">
      <p>userName :</p>
      <input
        class="input-name"
        placeholder="..."
        :value="name"
        @input="handleName"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "InputName",
  data() {
    return {
      title: "InputName",
      name: "",
    };
  },
  methods: {
    handleName(e) {
      const inputEl = e.target;
      this.name = inputEl.value;
    },
  },
  created() {
    console.log("InputName created");
  },
  mounted() {
    console.log("InputName mounted");
  },
  updated() {
    console.log("InputName updated");
  },
  destroyed() {
    console.log("InputName destroyed");
  },
  activated() {
    console.log("InputName activated");
  },
  deactivated() {
    console.log("InputName deactivated");
  },
});
</script>

<style scoped>
.container {
  padding: 30px;
}
.title {
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
}
.input-name-container {
  display: flex;
}
.input-name {
  margin-left: 20px;
  border: 1px solid #000;
}
</style>
