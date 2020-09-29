<template>
  <div class="display-container"></div>
</template>

<script>
export default {
  name: "Display"
};
</script>

<style scoped>
.display-container {
  position: absolute;
  top: 25px;
  left: 15%;
  width: 75%;
  height: 80%;
  border-radius: 5px;
  background-color: var(--green);
  box-shadow: 0 0 0 3px black inset;
}
</style>
