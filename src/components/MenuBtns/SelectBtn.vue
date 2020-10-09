<template>
  <div class="btn-container">
    <button class="menu-btn" @click="select_action"></button>
    <p class="btn-text">Select</p>
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";

export default {
  name: "SelectBtn",

  created() {
    window.addEventListener("keyup", this.handle_keyboard);
  },

  beforeDestroy() {
    window.removeEventListener("keyup", this.handle_keyboard);
  },

  methods: {
    select_action() {
      event_bus.$emit("select", "select");
    },

    handle_keyboard({ key }) {
      if (key === "Shift") {
        this.select_action();
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
  left: 30%;
}
</style>
