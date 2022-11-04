<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HomeContainer.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
