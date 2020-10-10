<template>
  <div class="d-pad-center"></div>
</template>

<script>
export default {
  name: "DPadCenter"
};
</script>

<style scoped>
.d-pad-center {
  position: relative;
  width: 30px;
  height: 30px;
  background-color: var(--black);
}

.d-pad-center::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: var(--light-black);
}
</style>
