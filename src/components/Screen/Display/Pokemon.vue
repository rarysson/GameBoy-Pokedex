<template>
  <div class="pokemon-container" v-if="pokemon !== null">
    <img class="pokemon-img" :src="pokemon.img" alt="" width="75" height="75" />

    <div class="pokemon-data">
      <p class="pokemon-name">{{ pokemon.name }}</p>

      <p class="pokemon-description">{{ pokemon.description }}</p>

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
import { get_pokemon } from "@/util/api";
import TypeTag from "./TypeTag";

export default {
  name: "Pokemon",

  props: {
    name: {
      type: String,
      required: true
    }
  },

  components: {
    TypeTag
  },

  data() {
    return {
      pokemon: null
    };
  },

  mounted() {
    this.set_pokemon();
  },

  watch: {
    name() {
      this.set_pokemon();
    }
  },

  methods: {
    async set_pokemon() {
      this.$emit("fetching-data");
      this.pokemon = await get_pokemon(this.name);
      this.$emit("data-fetched");
    }
  }
};
</script>

<style scoped>
.pokemon-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;
  background-color: white;
}

.pokemon-img {
  margin-right: 15px;
}

.pokemon-data {
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-bottom: 5px;
}

.pokemon-name {
  font-size: 24px;
  text-transform: capitalize;
  width: 100%;
}

.pokemon-description {
  font-size: 14px;
}

.type-tag:not(:last-of-type) {
  margin-right: 10px;
}
</style>
