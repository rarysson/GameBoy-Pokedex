<template>
  <div class="center"></div>
</template>

<script>
export default {
  name: "DPadCenter"
};
</script>

<style scoped>
.center {
  position: relative;
  width: 30px;
  height: 30px;
  background-color: var(--black);
}

.center::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: var(--light-black);
}
</style>
