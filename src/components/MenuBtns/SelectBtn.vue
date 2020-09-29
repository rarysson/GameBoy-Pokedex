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
@import url("../../styles/btn_container.css");
@import url("../../styles/btn_text.css");
@import url("../../styles/menu_btns.css");

.btn-container {
  bottom: 15%;
  left: 30%;
}
</style>
