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

      <!-- 최대로 캐시될 인스턴스 지정 -->
      <KeepAlive :max="2">
        <component class="tab" :is="currentMenu"></component>
      </KeepAlive>

      <!-- includes의 반대인 exclude -->
      <!-- <KeepAlive exclude="Counter"> -->
      <!-- <component class="tab" :is="currentMenu"></component> -->
      <!-- </KeepAlive> -->

      <!-- 조건부 캐싱을 위한 include, 정규표현식 또는 배열 지정으로 다수의 컴포넌트 캐싱 가능 (v-bind 사용) -->
      <!-- <KeepAlive include="Counter"> -->
      <!-- <component class="tab" :is="currentMenu"></component> -->
      <!-- </KeepAlive> -->

      <!-- dynamic component 캐싱 -->
      <!-- <KeepAlive> -->
      <!-- <component class="tab" :is="currentMenu"></component> -->
      <!-- </KeepAlive> -->

      <!-- 탭 메뉴 변화에 따라 created, mounted, destroyed 계속 수행 -->
      <!-- <component class="tab" :is="currentMenu"></component> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Counter from "./Counter.vue";
import InputName from "./InputName.vue";
import Ect from "./Ect.vue";

// https://vuejs.org/guide/essentials/component-basics.html#dynamic-components
export default Vue.extend({
  name: "TabMenu",
  components: {
    Counter,
    InputName,
    Ect,
  },
  data() {
    return {
      title: "TabMenu" as string,
      currentMenu: "Counter" as string,
      menuList: ["Counter", "InputName", "Ect"] as string[],
    };
  },
  methods: {
    changeCurrentMenu(menu: string) {
      return (this.currentMenu = menu);
    },
    // 보통 class binding은 computed로 선언하지만 v-for의 menu에 접근하기 위해 methods에서 사용
    // https://v3.ko.vuejs.org/guide/class-and-style.html#%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6-%E1%84%80%E1%85%AE%E1%84%86%E1%85%AE%E1%86%AB-2
    // https://joshua1988.github.io/vue-camp/syntax/computed.html#computed-%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC-%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5
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
