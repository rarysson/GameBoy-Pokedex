<template>
  <div class="btn-container">
    <button class="menu-btn" @click="start_action"></button>
    <p class="btn-text">Start</p>
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";

export default {
  name: "StartBtn",

  created() {
    window.addEventListener("keyup", this.handle_keyboard);
  },

  beforeDestroy() {
    window.removeEventListener("keyup", this.handle_keyboard);
  },

  methods: {
    start_action() {
      event_bus.$emit("start", "start");
    },

    handle_keyboard({ key }) {
      if (key === "Enter") {
        this.start_action();
      }
    }
  }
};
</script>

<style scoped>
@import "~@/styles/btn_container.css";
@import "~@/styles/btn_text.css";
@import "~@/styles/menu_btns.css";

.btn-container {
  bottom: 15%;
  left: 48%;
}
</style>
