<template>
  <div class="menu-btns">
    <select-btn />
    <start-btn />
  </div>
</template>

<script>
import SelectBtn from "./MenuBtns/SelectBtn";
import StartBtn from "./MenuBtns/StartBtn";

export default {
  name: "MenuBtns",

  components: {
    SelectBtn,
    StartBtn
  }
};
</script>
