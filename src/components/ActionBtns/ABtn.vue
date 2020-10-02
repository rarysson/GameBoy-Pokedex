<template>
  <div class="btn-container">
    <button class="action-btn"></button>
    <p class="btn-text">A</p>
  </div>
</template>

<script>
export default {
  name: "ABtn"
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
