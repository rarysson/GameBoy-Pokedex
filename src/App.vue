<template>
  <div id="app">
    <game-boy>
      <screen />
      <d-pad />
      <action-btns />
      <menu-btns />
      <game-boy-details />
    </game-boy>
  </div>
</template>

<script>
import GameBoy from "./components/GameBoy";
import Screen from "./components/Screen";
import DPad from "./components/DPad";
import ActionBtns from "./components/ActionBtns";
import MenuBtns from "./components/MenuBtns";
import GameBoyDetails from "./components/GameBoyDetails";

export default {
  name: "App",

  components: {
    GameBoy,
    Screen,
    DPad,
    ActionBtns,
    MenuBtns,
    GameBoyDetails
  }
};
</script>

<style scoped>
@import "./styles/reset.css";
@import "./styles/variables.css";

#app {
  position: relative;
  z-index: 0;
  min-width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--bg-color);
}
</style>
