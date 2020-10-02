<template>
  <div>
    <div class="detail-container">
      <p class="text">◀ OFF • ON ►</p>
    </div>
    <div class="stripe"></div>
  </div>
</template>

<script>
export default {
  name: "OffOnDetail"
};
</script>

<style scoped>
@import "~@/styles/gameboy_details.css";

.detail-container {
  top: 5px;
  left: 10%;
  transform: rotate(180deg) scaleX(-1);
}

.detail-container::after {
  bottom: -5px;
  width: 25px;
  height: 5px;
}

.text {
  transform: rotate(180deg) scaleX(-1);
}

.stripe {
  position: absolute;
  top: 25px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: var(--light-gray);
}

.stripe::before,
.stripe::after {
  content: "";
  position: absolute;
  bottom: 5px;
  width: 5px;
  height: 25px;
  background-color: var(--light-gray);
}

.stripe::before {
  right: 25px;
}

.stripe::after {
  left: 25px;
}
</style>
