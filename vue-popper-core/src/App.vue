<template>
  <h3>Tooltips</h3>
  <div class="flex">
    <div class="flexItem">
      <Tooltip placement="auto" />
      <Tooltip placement="auto-start" />
      <Tooltip placement="auto-end" />
    </div>
    <div class="flexItem">
      <Tooltip placement="top" />
      <Tooltip placement="top-start" />
      <Tooltip placement="top-end" />
    </div>
    <div class="flexItem">
      <Tooltip placement="right" />
      <Tooltip placement="right-start" />
      <Tooltip placement="right-end" />
    </div>
    <div class="flexItem">
      <Tooltip placement="bottom" />
      <Tooltip placement="bottom-start" />
      <Tooltip placement="bottom-end" />
    </div>
    <div class="flexItem">
      <Tooltip placement="left" />
      <Tooltip placement="left-start" />
      <Tooltip placement="left-end" />
    </div>
  </div>
  <h3>Dropdown</h3>
  <div class="wrapper">
    <Dropdown />
  </div>
  <h3>Popovers</h3>
  <div class="flex">
    <div class="flexItem">
      <Popover placement="top" />
    </div>
    <div class="flexItem">
      <Popover placement="right" />
    </div>
    <div class="flexItem">
      <Popover placement="bottom" />
    </div>
    <div class="flexItem">
      <Popover placement="left" />
    </div>
  </div>
  <h3>Time Picker</h3>
  <div class="wrapper">
    <TimePicker />
  </div>
</template>

<script>
import Tooltip from './components/Tooltip.vue'
import Dropdown from './components/Dropdown.vue'
import Popover from './components/Popover.vue'
import TimePicker from './components/TimePicker.vue'

export default {
  name: "App",
  components: {
    Tooltip,
    Dropdown,
    Popover,
    TimePicker
  },
};
</script>

<style>
#app {
  font-family: Avenir, Calibri, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 20px;
}

.flexItem {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.wrapper {
  margin-bottom: 20px;
}
</style>
