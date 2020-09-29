<template>
  <div class="screen-container">
    <screen-text />
    <light />
    <display />
  </div>
</template>

<script>
import ScreenText from "./Screen/ScreenText";
import Light from "./Screen/Light";
import Display from "./Screen/Display";

export default {
  name: "Screen",

  components: {
    ScreenText,
    Light,
    Display
  }
};
</script>

<style scoped>
.screen-container {
  position: absolute;
  top: 50px;
  left: 30px;
  width: 320px;
  height: 235px;
  border-radius: 15px;
  border-bottom-right-radius: 50px;
  background-color: var(--dark-gray);
}
</style>
