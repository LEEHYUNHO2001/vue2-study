<template>
  <div class="board-container">
    <h1>{{ msg }}</h1>
    <article class="boarad">
      <div
        class="box"
        @mousemove="doDragItem"
        @mousedown="startDragItem"
        @mouseup="stopDragItem"
        :style="customItemStyle"
      />
    </article>
  </div>
</template>

<script>
export default {
  name: "DndBoard",
  data() {
    return {
      msg: "DND",
      box: {
        x: 100,
        y: 200,
        clickX: 0,
        clickY: 0,
        dragging: false,
      },
    };
  },
  methods: {
    boardSize() {},
    doDragItem(e) {
      if (this.box.dragging) {
        this.box.x = e.clientX - this.box.clickX;
        this.box.y = e.clientY - this.box.clickY;
      }
    },
    startDragItem(e) {
      this.box.dragging = true;

      // box의 클릭 한 부분 기준으로 드래그 기능
      this.box.clickX = e.clientX - this.box.x;
      this.box.clickY = e.clientY - this.box.y;
    },
    stopDragItem() {
      this.box.dragging = false;
    },
  },
  computed: {
    customItemStyle() {
      return {
        top: `${this.box.y}px`,
        left: `${this.box.x}px`,
        border: this.box.dragging ? "3px solid deeppink" : "3px solid #fff",
      };
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.boarad {
  widows: 90vw;
  height: 50vh;
  border: 3px solid #000;
  border-radius: 10px;
  background-color: #dbdbdb;
}

.box {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
}
</style>
