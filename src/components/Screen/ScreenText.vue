<template>
  <div class="text-container">
    <p class="text">dot matrix with stereo soround</p>
  </div>
</template>

<script>
export default {
  name: "ScreenText"
};
</script>

<style scoped>
.text-container {
  position: absolute;
  top: 7px;
  left: 15px;
  width: 90%;
  background-image: linear-gradient(
    var(--red),
    var(--red) 33%,
    var(--dark-gray) 33%,
    var(--dark-gray) 66%,
    var(--blue) 66%
  );
}

.text {
  width: max-content;
  font-family: sans-serif;
  font-size: 8px;
  text-transform: uppercase;
  text-align: right;
  padding: 0 7px;
  margin-left: 30%;
  color: darkgray;
  background-color: var(--dark-gray);
}
</style>
