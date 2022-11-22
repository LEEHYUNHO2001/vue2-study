import { CreateElement } from "vue/types/umd";

import ListView from "./ListView.vue";
import bus from "../utils/bus";

export default function createListView(name: string) {
  return {
    name,
    mounted() {
      bus.$emit("off:progress");
    },
    render(h: CreateElement) {
      return h(ListView);
    },
  };
}
