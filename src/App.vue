<template>
  <div id="app">
    <game-boy>
      <d-pad />
      <action-btns />
      <menu-btns />
      <vent-effect />
    </game-boy>
  </div>
</template>

<script>
import GameBoy from "./components/GameBoy";
import DPad from "./components/DPad";
import ActionBtns from "./components/ActionBtns";
import MenuBtns from "./components/MenuBtns";
import VentEffect from "./components/VentEffect";

export default {
  name: "App",

  components: {
    GameBoy,
    DPad,
    ActionBtns,
    MenuBtns,
    VentEffect
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
