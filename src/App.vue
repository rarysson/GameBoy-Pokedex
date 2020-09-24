<template>
  <div id="app">
    <game-boy />
  </div>
</template>

<script>
import GameBoy from "./components/GameBoy.vue";

export default {
  name: "App",

  components: {
    GameBoy
  }
};
</script>
