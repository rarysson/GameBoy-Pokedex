<template>
  <div class="pli-container" @click="clicked">
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

  methods: {
    clicked() {
      this.$emit("click", this.pokemon.name);
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

.pli-container:hover {
  border: 2px solid black;
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
