<template>
  <div class="tab-menu">
    <h1>{{ title }}</h1>
    <div class="demo">
      <button
        v-for="menu in menuList"
        :key="menu"
        :class="isCurrentMenu(menu)"
        @click="changeCurrentMenu(menu)"
      >
        {{ menu }}
      </button>
      <component :is="currentMenu" class="tab"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Counter from "./Counter";
import InputName from "./InputName.vue";

export default Vue.extend({
  name: "TabMenu",
  components: {
    Counter,
    InputName,
  },
  data() {
    return {
      title: "TabMenu" as string,
      currentMenu: "Counter" as string,
      menuList: ["Counter", "InputName"] as string[],
    };
  },
  methods: {
    changeCurrentMenu(menu: string) {
      return (this.currentMenu = menu);
    },
    // 보통 class binding은 computed로 선언하지만 v-for의 menu에 접근하기 위해 methods에서 사용
    isCurrentMenu(menu: string) {
      return ["tab-button", { active: this.currentMenu === menu }];
    },
  },
});
</script>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
