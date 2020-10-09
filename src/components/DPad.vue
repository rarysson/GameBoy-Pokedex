<template>
  <div class="d-pad-container">
    <d-pad-btn class="btn-up" @click="up_action" />
    <d-pad-btn class="btn-down" @click="down_action" />
    <d-pad-btn class="btn-left" @click="left_action" />
    <d-pad-btn class="btn-right" @click="right_action" />
    <d-pad-center class="center" />
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";
import DPadBtn from "./DPad/DPadBtn";
import DPadCenter from "./DPad/DPadCenter";

export default {
  name: "DPad",

  components: {
    DPadBtn,
    DPadCenter
  },

  created() {
    window.addEventListener("keyup", this.handle_keyboard);
  },

  beforeDestroy() {
    window.removeEventListener("keyup", this.handle_keyboard);
  },

  methods: {
    up_action() {
      event_bus.$emit("up", "up");
    },

    down_action() {
      event_bus.$emit("down", "down");
    },

    left_action() {
      event_bus.$emit("left", "left");
    },

    right_action() {
      event_bus.$emit("right", "right");
    },

    handle_keyboard({ key }) {
      switch (key) {
        case "ArrowUp":
          this.up_action();
          break;
        case "ArrowDown":
          this.down_action();
          break;
        case "ArrowLeft":
          this.left_action();
          break;
        case "ArrowRight":
          this.right_action();
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.d-pad-container {
  position: absolute;
  bottom: 27%;
  left: 30px;
  width: 90px;
  height: 90px;
  display: grid;
  grid-template-areas:
    ". up ."
    "left center right"
    ". down .";
}

.btn-up {
  grid-area: up;
  transform: rotate(180deg);
}

.btn-down {
  grid-area: down;
}

.btn-left {
  grid-area: left;
  transform: rotate(90deg);
}

.btn-right {
  grid-area: right;
  transform: rotate(-90deg);
}

.center {
  grid-area: center;
}
</style>
