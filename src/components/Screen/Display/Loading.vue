<template>
  <transition
    @before-enter="set_data"
    @before-leave="reset_data"
    :duration="900"
  >
    <div class="loading-container" v-if="loading">
      <div
        class="top-pokeball"
        :class="is_loading ? 'active' : ''"
        ref="top_pokeball"
      ></div>
      <div
        class="bottom-pokeball"
        :class="is_loading ? 'active' : ''"
        ref="bottom_pokeball"
      ></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Loading",

  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      is_loading: false
    };
  },

  mounted() {
    this.set_data();
  },

  methods: {
    set_data() {
      setTimeout(() => {
        this.is_loading = true;
      }, 1100);
    },

    reset_data() {
      this.is_loading = false;
      this.$refs.top_pokeball.classList.remove("active");
      this.$refs.top_pokeball.classList.add("top-pokeball-leave");
      this.$refs.bottom_pokeball.classList.remove("active");
      this.$refs.bottom_pokeball.classList.add("bottom-pokeball-leave");
    }
  }
};
</script>

<style scoped>
.loading-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  --pokeball-width: 120px;
  --pokeball-height: 60px;
  --border-width: 3px;
}

.top-pokeball,
.bottom-pokeball {
  position: relative;
  width: 100%;
  height: 50%;
  background-color: white;
}

.top-pokeball {
  animation: going-down 1s;
}

.top-pokeball-leave {
  animation: going-up-from-down 1s;
}

@keyframes going-down {
  from {
    transform: translateY(-100%);
  }

  to {
    position: relative;
    z-index: 99;
    transform: translateY(0);
  }
}

@keyframes going-up-from-down {
  from {
    transform: translateY(0);
  }

  to {
    position: relative;
    z-index: 99;
    transform: translateY(-100%);
  }
}

.bottom-pokeball {
  animation: going-up 1s;
}

.bottom-pokeball-leave {
  animation: going-down-from-up 1s;
}

@keyframes going-up {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes going-down-from-up {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(100%);
  }
}

.top-pokeball::before,
.bottom-pokeball::before {
  content: "";
  position: absolute;
  left: calc(50% - calc(var(--pokeball-width) / 2));
  width: var(--pokeball-width);
  height: var(--pokeball-height);
  border: var(--border-width) solid black;
}

.top-pokeball::before {
  bottom: 0;
  z-index: 99;
  background-color: crimson;
  border-top-left-radius: var(--pokeball-height);
  border-top-right-radius: var(--pokeball-height);
}

.top-pokeball.active::before {
  animation: shake-top 1.5s infinite;
}

@keyframes shake-top {
  0% {
    transform: rotate(-20deg);
  }

  25% {
    transform: rotate(20deg);
  }

  50% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0);
  }
}

.bottom-pokeball::before {
  top: 0;
  border-bottom-left-radius: var(--pokeball-height);
  border-bottom-right-radius: var(--pokeball-height);
}

.bottom-pokeball.active::before {
  animation: shake-bottom 1.5s infinite;
}

@keyframes shake-bottom {
  0% {
    transform: rotate(-20deg) translateX(20px);
  }

  25% {
    transform: rotate(20deg) translateX(-20px);
  }

  50% {
    transform: rotate(-10deg) translateX(10px);
  }

  75% {
    transform: rotate(10deg) translateX(-10px);
  }

  100% {
    transform: rotate(0) translateX(0);
  }
}

.top-pokeball::after,
.bottom-pokeball::after {
  content: "";
  position: absolute;
  left: calc(50% - calc(calc(var(--pokeball-width) / 4) / 2));
  width: calc(var(--pokeball-width) / 4);
}

.top-pokeball::after {
  bottom: 0;
  z-index: 99;
  height: calc(var(--pokeball-width) / 4);
  border: calc(var(--border-width) * 2) solid black;
  border-radius: 100%;
  background-color: white;
  translate: 0 50%;
}

.top-pokeball.active::after {
  animation: shake-inner 1.5s infinite;
}

@keyframes shake-inner {
  0% {
    transform: translateX(10px);
  }

  25% {
    transform: translateX(-10px);
    box-shadow: 0 0 15px 7px red;
  }

  50% {
    transform: translateX(5px);
    background-color: red;
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.bottom-pokeball::after {
  top: 0;
  height: calc(var(--pokeball-height) / 4);
  border-bottom-left-radius: var(--pokeball-height);
  border-bottom-right-radius: var(--pokeball-height);
  border: calc(var(--border-width) * 2) solid black;
  border-top-width: var(--border-width);
  border-top-color: white;
}

.bottom-pokeball.active::after {
  visibility: hidden;
}
</style>
