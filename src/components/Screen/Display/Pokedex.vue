<template>
  <div
    class="pokedex-container"
    :style="{ backgroundColor: bg_color, scrollBehavior: scroll_behavior }"
  >
    <pokemon-list-item
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
      :class="{ focus: pokemon.id === current_index + 1 }"
    />
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";
import { get_pokemons, get_next_pokemons } from "@/util/api";
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
      scroll_behavior: "smooth",
      current_index: null,
      max_index: null
    };
  },

  created() {
    event_bus.$on("up", this.handle_up_event);
    event_bus.$on("down", this.handle_down_event);
    event_bus.$on("get_pokemon", this.handle_get_pokemon_event);
  },

  async mounted() {
    this.$emit("fetching-data");
    this.bg_color = "transparent";
    this.pokemons = await get_pokemons();
    this.current_index = this.current_index ?? 0;
    this.max_index = this.max_index ?? Object.keys(this.pokemons).length - 1;
    this.bg_color = "white";
    this.$emit("data-fetched");
  },

  activated() {
    if (this.$el.children.length !== 0) {
      this.scroll_to_current_child();
      this.scroll_behavior = "smooth";
    }
  },

  deactivated() {
    this.scroll_behavior = "auto";
  },

  beforeDestroy() {
    event_bus.$off("up", this.handle_up_event);
    event_bus.$off("down", this.handle_down_event);
    event_bus.$off("get_pokemon", this.handle_get_pokemon_event);
  },

  methods: {
    scroll_to_current_child() {
      const child = this.$el.children[this.current_index];

      if (child) {
        this.$el.scrollTo(0, child.offsetTop - child.offsetHeight);
      }
    },

    handle_up_event() {
      if (this.current_index > 0) {
        this.current_index--;

        this.scroll_to_current_child();
      }
    },

    async handle_down_event() {
      if (this.current_index < this.max_index) {
        this.current_index++;

        this.scroll_to_current_child();

        if (this.current_index + 4 >= this.max_index) {
          const response = await get_next_pokemons();

          if (Object.keys(response).length > 0) {
            this.pokemons = { ...this.pokemons, ...response };
            this.max_index = Object.keys(this.pokemons).length - 1;
          }
        }
      }
    },

    handle_get_pokemon_event() {
      const current_pokemon = Object.keys(this.pokemons)[this.current_index];

      event_bus.$emit("pokemon_selected", this.pokemons[current_pokemon].name);
    }
  }
};
</script>

<style scoped>
.pokedex-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
