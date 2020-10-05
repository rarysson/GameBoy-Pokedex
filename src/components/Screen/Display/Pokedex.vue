<template>
  <div class="pokedex-container" :style="{ backgroundColor: bg_color }">
    <pokemon-list-item
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
      :class="{ focus: pokemon.id === current_id }"
    />
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";
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
      bg_color: "transparent",
      current_id: 0,
      max_id: 0
    };
  },

  created() {
    event_bus.$on("up", () => {
      if (this.current_id > 1) {
        this.current_id--;

        const child = this.$el.children[this.current_id - 1];
        this.$el.scrollTo(0, child.offsetTop - child.offsetHeight);
      }
    });

    event_bus.$on("down", () => {
      if (this.current_id < this.max_id) {
        this.current_id++;

        const child = this.$el.children[this.current_id - 1];
        this.$el.scrollTo(0, child.offsetTop - child.offsetHeight);
      }
    });

    event_bus.$on("get_pokemon", () => {
      event_bus.$emit(
        "pokemon_selected",
        this.pokemons[this.current_id - 1].name
      );
    });
  },

  async mounted() {
    this.$emit("fetching-data");
    this.bg_color = "transparent";
    this.pokemons = await get_pokemons();
    this.current_id = this.pokemons[0].id;
    this.max_id = this.pokemons.length;
    this.bg_color = "white";
    this.$emit("data-fetched");
  }
};
</script>

<style scoped>
.pokedex-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  scroll-behavior: smooth;
}

.focus {
  position: relative;
}

.focus::after {
  content: "\25C0";
  position: absolute;
  top: 15px;
  right: 5px;
  animation: selected 1s infinite;
}

@keyframes selected {
  from {
    right: 5px;
  }

  to {
    right: 20px;
  }
}
</style>
