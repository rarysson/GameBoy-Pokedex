<template>
  <div class="btn-container">
    <button class="menu-btn"></button>
    <p class="btn-text">Select</p>
  </div>
</template>

<script>
export default {
  name: "SelectBtn"
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
