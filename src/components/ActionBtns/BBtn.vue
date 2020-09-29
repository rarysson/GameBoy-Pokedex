<template>
  <div class="btn-container">
    <button class="action-btn"></button>
    <p class="btn-text">B</p>
  </div>
</template>

<script>
export default {
  name: "BBtn"
};
</script>

<style scoped>
@import "../../styles/btn_container.css";
@import "../../styles/btn_text.css";
@import "../../styles/action_btns.css";

.btn-container {
  position: relative;
  top: 5px;
  left: 5px;
  transform: rotate(0deg);
}
</style>
