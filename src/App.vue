<template>
  <div id="app">
    <game-boy>
      <action-btns />

      <menu-btns />

      <vent-effect />
    </game-boy>
  </div>
</template>

<script>
import GameBoy from "./components/GameBoy";
import VentEffect from "./components/VentEffect";
import ActionBtns from "./components/ActionBtns";
import MenuBtns from "./components/MenuBtns";

export default {
  name: "App",

  components: {
    GameBoy,
    VentEffect,
    ActionBtns,
    MenuBtns
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
