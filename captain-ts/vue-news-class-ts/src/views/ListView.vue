<template>
  <div>
    <ListItem :items="newsItems" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { fetchNews } from "@/api";

import ListItem from "../components/ListItem.vue";

@Component({
  components: {
    ListItem,
  },
})
export default class ListView extends Vue {
  newsItems = [];

  async fetchNewsItems() {
    const res = await fetchNews();
    this.newsItems = res.data;
    console.log(this.newsItems);
  }

  created() {
    this.fetchNewsItems();
  }
}
</script>

<style></style>
