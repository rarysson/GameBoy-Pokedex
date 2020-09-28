<template>
  <div class="gameboy">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GameBoy"
};
</script>

<style scoped>
.gameboy {
  position: relative;
  width: 375px;
  height: 600px;
  border-radius: 15px;
  border-bottom-right-radius: 75px;
  background-color: #c0bdb8;
}
</style>
