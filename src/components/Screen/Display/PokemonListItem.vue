<template>
  <div class="pli-container">
    <img class="pokemon-img" :src="pokemon.img" alt="" width="50" height="50" />

    <div class="pokemon-data">
      <p class="pokemon-name">{{ pokemon.name }}</p>

      <type-tag
        class="type-tag"
        v-for="(type, index) in pokemon.types"
        :key="index"
        :type="type"
      />
    </div>
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";
import TypeTag from "./TypeTag";

export default {
  name: "PokemonListItem",

  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },

  components: {
    TypeTag
  },

  created() {
    event_bus.$on("shiny-mode", this.change_img);
  },

  beforeDestroy() {
    event_bus.$off("shiny-mode", this.change_img);
  },

  methods: {
    change_img() {
      [this.pokemon.img, this.pokemon.img_shiny] = [
        this.pokemon.img_shiny,
        this.pokemon.img
      ];
    }
  }
};
</script>

<style scoped>
.pli-container {
  width: 100%;
  height: 50px;
  display: flex;
  background-color: whitesmoke;
}

.pli-container:nth-child(even) {
  background-color: var(--light-gray);
}

.pokemon-img {
  margin-right: 5px;
}

.pokemon-data {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  padding-bottom: 5px;
}

.pokemon-name {
  font-size: 20px;
  text-transform: capitalize;
  width: 100%;
}

.type-tag:not(:last-of-type) {
  margin-right: 10px;
}
</style>
