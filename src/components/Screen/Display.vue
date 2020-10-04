<template>
  <div class="display-container" :style="{ backgroundColor: bg_color }">
    <loading class="loading" :loading="loading" />
    <component
      :is="current_component"
      :name="current_pokemon"
      @fetching-data="loading = true"
      @data-fetched="loading = false"
      @click="set_pokemon"
    />
  </div>
</template>

<script>
import Loading from "./Display/Loading";
import Pokedex from "./Display/Pokedex";
import Pokemon from "./Display/Pokemon";

export default {
  name: "Display",

  components: {
    Loading,
    Pokedex,
    Pokemon
  },

  data() {
    return {
      loading: true,
      current_pokemon: null,
      current_component: "pokedex",
      bg_color: "var(--green)"
    };
  },

  methods: {
    set_pokemon(data) {
      this.current_pokemon = data;
      this.current_component = "pokemon";
      this.bg_color = "white";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

.display-container {
  --box-shadow-width: 3px;
  position: absolute;
  top: 25px;
  left: 15%;
  width: 75%;
  height: 80%;
  padding: var(--box-shadow-width);
  border-radius: 5px;
  box-shadow: 0 0 0 var(--box-shadow-width) black inset;
  font-family: "VT323", monospace;
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--box-shadow-width);
}
</style>
