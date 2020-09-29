<template>
  <button class="d-pad-btn"></button>
</template>

<script>
export default {
  name: "DPadBtn"
};
</script>

<style scoped>
.d-pad-btn {
  position: relative;
  width: 30px;
  height: 30px;
  background-color: var(--black);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}

.d-pad-btn:active {
  background-color: var(--black-active);
}

.d-pad-btn::after {
  content: "\25BC";
  position: absolute;
  bottom: -45%;
  left: 8px;
  color: var(--light-gray);
}

.d-pad-btn:active::after {
  color: var(--gray);
}
</style>
