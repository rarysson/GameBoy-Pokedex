<template>
  <div class="btn-container">
    <button class="action-btn" @click="return_action"></button>
    <p class="btn-text">B</p>
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";

export default {
  name: "BBtn",

  methods: {
    return_action() {
      event_bus.$emit("return");
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
  left: 5px;
  transform: rotate(0deg);
}
</style>
