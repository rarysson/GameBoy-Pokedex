<template>
  <div id="app">
    <game-boy>
      <vent-effect />
    </game-boy>
  </div>
</template>

<script>
import GameBoy from "./components/GameBoy";
import VentEffect from "./components/VentEffect";

export default {
  name: "App",

  components: {
    GameBoy,
    VentEffect
  }
};
</script>

<style scoped>
@import url("./styles/reset.css");

#app {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: cadetblue;
}
</style>
