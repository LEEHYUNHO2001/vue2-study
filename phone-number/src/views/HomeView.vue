<template>
  <div class="home">
    <PhoneNumber />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PhoneNumber from "@/components/PhoneNumber.vue"; // @ is an alias to /src

@Component({
  components: {
    PhoneNumber,
  },
})
export default class HomeView extends Vue {}
</script>
