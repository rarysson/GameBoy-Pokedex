<template>
  <div class="detail-container">
    <p class="text">☊ phones</p>
  </div>
</template>

<script>
export default {
  name: "PhonesDetail"
};
</script>

<style scoped>
@import "../../styles/gameboy_details.css";

.detail-container {
  bottom: 10px;
  left: 35%;
}

.detail-container::after {
  bottom: -10px;
  right: 10px;
  height: 10px;
}
</style>
