<template>
  <div class="btn-container">
    <button class="action-btn" @click="select_action"></button>
    <p class="btn-text">A</p>
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";

export default {
  name: "ABtn",

  methods: {
    select_action() {
      event_bus.$emit("select");
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
