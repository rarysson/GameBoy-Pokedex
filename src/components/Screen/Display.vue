<template>
  <div class="display-container" :style="{ backgroundColor: bg_color }">
    <loading class="loading" :loading="loading" />
    <keep-alive include="Pokedex">
      <component
        :is="current_component"
        :name="current_pokemon"
        @fetching-data="loading = true"
        @data-fetched="loading = false"
      />
    </keep-alive>
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";
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

  created() {
    event_bus.$on("b", this.handle_b_event);
    event_bus.$on("a", this.handle_a_event);
    event_bus.$on("pokemon_selected", this.handle_pokemon_selected_event);
  },

  beforeDestroy() {
    event_bus.$off("b", this.handle_b_event);
    event_bus.$off("select", this.handle_a_event);
    event_bus.$off("pokemon_selected", this.handle_pokemon_selected_event);
  },

  methods: {
    handle_b_event() {
      if (this.current_component === "pokemon") {
        this.current_component = "pokedex";
      }
    },

    handle_a_event() {
      event_bus.$emit("get_pokemon");

      if (this.current_component === "pokedex") {
        this.current_component = "pokemon";
      }
    },

    handle_pokemon_selected_event(name) {
      this.current_pokemon = name;
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
