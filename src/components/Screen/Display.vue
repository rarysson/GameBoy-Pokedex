<template>
  <div class="display-container">
    <loading class="loading" :loading="loading" />
    <pokedex @fetching-data="loading = true" @data-fetched="loading = false" />
  </div>
</template>

<script>
import Loading from "./Display/Loading";
import Pokedex from "./Display/Pokedex";

export default {
  name: "Display",

  components: {
    Loading,
    Pokedex
  },

  data() {
    return {
      loading: true
    };
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
  background-color: var(--green);
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
