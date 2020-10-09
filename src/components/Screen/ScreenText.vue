<template>
  <div class="text-container">
    <div class="text-wrapper">
      <p class="text">dot matrix with stereo soround</p>
    </div>
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

.text-wrapper {
  width: fit-content;
  margin-left: 30%;
  background-color: var(--dark-gray);
}

.text {
  width: max-content;
  font-family: sans-serif;
  font-size: 8px;
  text-transform: uppercase;
  padding: 0 7px;
  color: darkgray;
}
</style>
