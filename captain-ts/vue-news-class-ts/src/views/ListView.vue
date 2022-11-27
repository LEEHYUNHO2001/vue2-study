<template>
  <div>
    <ListItem :items="newsItems" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { fetchNews } from "@/api";

import ListItem from "../components/ListItem.vue";
import { NewsItem } from "@/types";

@Component({
  components: {
    ListItem,
  },
})
export default class ListView extends Vue {
  newsItems = [] as NewsItem[];

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
