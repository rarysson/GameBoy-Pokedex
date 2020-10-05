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

  methods: {
    up_action() {
      event_bus.$emit("up");
    },

    down_action() {
      event_bus.$emit("down");
    },

    left_action() {
      event_bus.$emit("left");
    },

    right_action() {
      event_bus.$emit("right");
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
