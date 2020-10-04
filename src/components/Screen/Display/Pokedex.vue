<template>
  <div class="pokedex-container" :style="{ backgroundColor: bg_color }">
    <pokemon-list-item
      v-for="(pokemon, index) in pokemons"
      :key="index"
      :pokemon="pokemon"
      @click="$emit('click', $event)"
    />
  </div>
</template>

<script>
import { get_pokemons } from "@/util/api";
import PokemonListItem from "./PokemonListItem";

export default {
  name: "Pokedex",

  components: {
    PokemonListItem
  },

  data() {
    return {
      pokemons: [],
      bg_color: "transparent"
    };
  },

  async mounted() {
    this.$emit("fetching-data");
    this.bg_color = "transparent";
    this.pokemons = await get_pokemons();
    this.bg_color = "white";
    this.$emit("data-fetched");
  }
};
</script>

<style scoped>
.pokedex-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
