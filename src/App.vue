<template>
  <div id="app">
    <game-boy>
      <div class="menu-btns">
        <select-btn />
        <start-btn />
      </div>

      <vent-effect />
    </game-boy>
  </div>
</template>

<script>
import GameBoy from "./components/GameBoy";
import VentEffect from "./components/VentEffect";
import SelectBtn from "./components/SelectBtn";
import StartBtn from "./components/StartBtn";

export default {
  name: "App",

  components: {
    GameBoy,
    VentEffect,
    SelectBtn,
    StartBtn
  }
};
</script>

<style scoped>
@import url("./styles/reset.css");
@import url("./styles/variables.css");

#app {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: cadetblue;
}
</style>
