<template>
  <div class="display-container">
    <loading :loading="loading" />
  </div>
</template>

<script>
import Loading from "./Display/Loading";

export default {
  name: "Display",

  components: {
    Loading
  },

  data() {
    return {
      loading: true
    };
  }
};
</script>

<style scoped>
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
}
</style>
