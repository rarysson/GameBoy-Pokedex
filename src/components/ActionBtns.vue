<template>
  <div class="action-btns">
    <b-btn />
    <a-btn />
  </div>
</template>

<script>
import BBtn from "./ActionBtns/BBtn";
import ABtn from "./ActionBtns/ABtn";

export default {
  name: "ActionBtns",

  components: {
    BBtn,
    ABtn
  }
};
</script>

<style scoped>
.action-btns {
  position: absolute;
  bottom: 30%;
  right: 5%;
  width: 130px;
  height: 60px;
  border-radius: 50px;
  background-color: var(--shadow-color);
  transform: rotate(var(--rotate-value));
}
</style>
