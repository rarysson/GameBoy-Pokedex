<template>
  <div class="vent-effect">
    <div class="vent-bar bar-1"></div>
    <div class="vent-bar bar-2"></div>
  </div>
</template>

<script>
export default {
  name: "VentEffect"
};
</script>

<style scoped>
.vent-effect {
  position: absolute;
  display: flex;
  bottom: 30px;
  right: 35px;
  transform: rotate(var(--rotate-value));
}

.vent-bar {
  position: relative;
}

.vent-bar,
.vent-bar::before,
.vent-bar::after {
  width: 7px;
  height: 47px;
  border-radius: 10px;
  background-color: var(--light-gray);
}

.vent-bar::before,
.vent-bar::after {
  content: "";
  position: absolute;
  top: 0;
}

.vent-bar::before {
  left: -15px;
}

.vent-bar::after {
  right: -15px;
}

.bar-1 {
  margin-right: 38px;
}
</style>
