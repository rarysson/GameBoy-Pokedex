<template>
  <div class="loading-container" :style="{ zIndex: z_index }">
    <div :class="top_classes" ref="top_pokeball"></div>
    <div :class="inner_top_classes"></div>
    <div :class="bottom_classes"></div>
  </div>
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
      is_loading: false,
      entering: false,
      enter_animation_ended: false,
      leave_animation_started: false,
      z_index: -1
    };
  },

  mounted() {
    this.$refs.top_pokeball.addEventListener(
      "animationend",
      this.handle_enter_animation_event
    );

    this.$refs.top_pokeball.addEventListener(
      "animationstart",
      this.handle_leave_animation_event
    );

    this.is_loading = this.loading;
  },

  beforeDestroy() {
    this.$refs.top_pokeball.removeEventListener(
      "animationend",
      this.handle_enter_animation_event
    );

    this.$refs.top_pokeball.removeEventListener(
      "animationstart",
      this.handle_leave_animation_event
    );
  },

  watch: {
    loading(val) {
      this.is_loading = val;
    }
  },

  computed: {
    top_classes() {
      return [
        "top-pokeball",
        this.is_loading ? "top-pokeball-enter" : "top-pokeball-leave",
        this.enter_animation_ended && !this.leave_animation_started
          ? "active"
          : ""
      ];
    },

    inner_top_classes() {
      return [
        "inner-top-pokeball",
        this.is_loading
          ? "inner-top-pokeball-enter"
          : "inner-top-pokeball-leave",
        this.enter_animation_ended ? "active" : ""
      ];
    },

    bottom_classes() {
      return [
        "bottom-pokeball",
        this.is_loading ? "bottom-pokeball-enter" : "bottom-pokeball-leave",
        this.enter_animation_ended && !this.leave_animation_started
          ? "active"
          : ""
      ];
    }
  },

  methods: {
    handle_enter_animation_event({ animationName }) {
      if (animationName.includes("going-down")) {
        this.enter_animation_ended = true;
      } else if (animationName.includes("going-up-from-down")) {
        this.leave_animation_started = false;
        this.z_index = -1;
      }
    },

    handle_leave_animation_event({ animationName }) {
      if (animationName.includes("going-up-from-down")) {
        this.leave_animation_started = true;
        this.enter_animation_ended = false;
      } else if (animationName.includes("going-down")) {
        this.z_index = 9;
      }
    }
  }
};
</script>

<style scoped>
.loading-container {
  position: relative;
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
  z-index: 99;
}

.top-pokeball-enter {
  animation: going-down 1s forwards;
}

@keyframes going-down {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
}

.top-pokeball-leave {
  animation: going-up-from-down 1s forwards;
}

@keyframes going-up-from-down {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-150%);
  }
}

.bottom-pokeball-enter {
  animation: going-up 1s;
}

@keyframes going-up {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}

.bottom-pokeball-leave {
  animation: going-down-from-up 1s forwards;
}

@keyframes going-down-from-up {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(150%);
  }
}

.top-pokeball::before,
.bottom-pokeball::before {
  content: "";
  position: absolute;
  z-index: 99;
  left: calc(50% - calc(var(--pokeball-width) / 2));
  width: var(--pokeball-width);
  height: var(--pokeball-height);
  border: var(--border-width) solid black;
}

.top-pokeball::before {
  bottom: 0;
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

.inner-top-pokeball,
.bottom-pokeball::after {
  content: "";
  position: absolute;
  left: calc(50% - calc(calc(var(--pokeball-width) / 4) / 2));
  width: calc(var(--pokeball-width) / 4);
}

.inner-top-pokeball {
  top: 42%;
  z-index: 999;
  height: calc(var(--pokeball-width) / 4);
  border: calc(var(--border-width) * 2) solid black;
  border-radius: 100%;
  background-color: white;
}

.inner-top-pokeball-enter {
  animation: going-down-inner 1s forwards;
}

@keyframes going-down-inner {
  from {
    transform: translateY(-350%);
  }

  to {
    transform: translateY(0%);
  }
}

.inner-top-pokeball-leave {
  animation: going-up-from-down-inner 1s forwards;
}

@keyframes going-up-from-down-inner {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-500%);
  }
}

.inner-top-pokeball.active {
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
