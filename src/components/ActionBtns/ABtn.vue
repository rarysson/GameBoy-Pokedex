<template>
  <div class="btn-container">
    <button class="action-btn" @click="a_action"></button>
    <p class="btn-text">A</p>
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";

export default {
  name: "ABtn",

  created() {
    window.addEventListener("keyup", this.handle_keyboard);
  },

  beforeDestroy() {
    window.removeEventListener("keyup", this.handle_keyboard);
  },

  methods: {
    a_action() {
      event_bus.$emit("a", "a");
    },

    handle_keyboard({ key }) {
      if (key === "x" || key === "X") {
        this.a_action();
      }
    }
  }
};
</script>

<style scoped>
@import "~@/styles/btn_container.css";
@import "~@/styles/btn_text.css";
@import "~@/styles/action_btns.css";

.btn-container {
  position: relative;
  top: 5px;
  left: calc(50% - 40px);
  transform: rotate(0deg);
}
</style>
