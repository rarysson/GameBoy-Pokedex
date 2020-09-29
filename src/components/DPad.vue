<template>
  <div class="d-pad-container">
    <d-pad-btn class="btn-up" />
    <d-pad-btn class="btn-down" />
    <d-pad-btn class="btn-left" />
    <d-pad-btn class="btn-right" />
    <d-pad-center class="center" />
  </div>
</template>

<script>
import DPadBtn from "./DPad/DPadBtn";
import DPadCenter from "./DPad/DPadCenter";

export default {
  name: "DPad",

  components: {
    DPadBtn,
    DPadCenter
  }
};
</script>

<style scoped>
.d-pad-container {
  position: absolute;
  bottom: 27%;
  left: 30px;
  width: 90px;
  height: 90px;
  display: grid;
  grid-template-areas:
    ". up ."
    "left center right"
    ". down .";
}

.btn-up {
  grid-area: up;
  transform: rotate(180deg);
}

.btn-down {
  grid-area: down;
}

.btn-left {
  grid-area: left;
  transform: rotate(90deg);
}

.btn-right {
  grid-area: right;
  transform: rotate(-90deg);
}

.center {
  grid-area: center;
}
</style>
