<template>
  <div class="gameboy" ref="gameboy">
    <slot />
    <transition>
      <div v-show="selecting_color" class="color-selector">
        <div class="gb-color yellow" @click="change_color('yellow')"></div>
        <div class="gb-color green" @click="change_color('green')"></div>
        <div class="gb-color blue" @click="change_color('blue')"></div>
        <div class="gb-color gray" @click="change_color('gray')"></div>
        <button class="close-color-selector" @click="selecting_color = false">
          ◀
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { event_bus } from "@/util/event_bus";

const secret_code = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a"
];

export default {
  name: "GameBoy",

  data() {
    return {
      selecting_color: false,
      recording_events: false,
      events: []
    };
  },

  created() {
    event_bus.$on("select", this.record_events);
    event_bus.$on("start", this.active_color_selector);
    event_bus.$on(["up", "down", "left", "right", "b", "a"], this.save_events);
  },

  mounted() {
    this.$refs.gameboy.addEventListener(
      "animationend",
      this.handle_animation_event
    );
  },

  beforeDestroy() {
    event_bus.$off("select", this.record_events);
    event_bus.$off("start", this.active_color_selector);
    event_bus.$off(["up", "down", "left", "right", "b", "a"], this.save_events);
    this.$refs.gameboy.removeEventListener(
      "animationend",
      this.handle_animation_event
    );
  },

  methods: {
    record_events() {
      if (!this.recording_events) {
        this.recording_events = true;
      }
    },

    save_events(type) {
      if (this.recording_events) {
        this.events.push(type);

        if (this.events.length === 10) {
          if (JSON.stringify(this.events) === JSON.stringify(secret_code)) {
            this.$refs.gameboy.classList.add("rainbow-text");
            event_bus.$emit("shiny-mode");
          }

          this.events = [];
          this.recording_events = false;
        }
      }
    },

    handle_animation_event({ animationName }) {
      if (animationName.includes("rainbow-animation")) {
        this.$refs.gameboy.classList.remove("rainbow-text");
      }
    },

    change_color(color) {
      this.$refs.gameboy.style.setProperty(
        "--gameboy-color",
        `var(--gameboy-${color})`
      );
    },

    active_color_selector() {
      this.selecting_color = true;
    }
  }
};
</script>

<style scoped>
.gameboy {
  --gameboy-width: 380px;
  --gameboy-height: 600px;
  position: relative;
  width: var(--gameboy-width);
  height: var(--gameboy-height);
  border-radius: 15px;
  border-bottom-right-radius: 75px;
  background-color: var(--gameboy-color);
}

.color-selector {
  position: relative;
  z-index: -1;
  width: 60px;
  height: var(--gameboy-height);
  margin-left: var(--gameboy-width);
  background-color: var(--dark-gray);
  padding: 10px 0;
  border-top: calc(var(--gameboy-height) / 4) solid var(--bg-color);
  border-bottom: calc(var(--gameboy-height) / 4) solid var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.close-color-selector {
  position: absolute;
  top: -10%;
  right: -15px;
  width: 15px;
  height: 120%;
  background-color: var(--gameboy-color);
}

.gb-color {
  width: 40px;
  height: 40px;
  border: 3px solid black;
  border-radius: 100%;
  cursor: pointer;
}

.yellow {
  background-color: var(--gameboy-yellow);
}

.green {
  background-color: var(--gameboy-green);
}

.blue {
  background-color: var(--gameboy-blue);
}

.gray {
  background-color: var(--gameboy-gray);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  transform: translateX(-150%);
}
</style>

<style>
.rainbow-text p:not(.type-tag) {
  background: linear-gradient(
    to right,
    #6666ff,
    #0099ff,
    lime,
    #ff3399,
    #6666ff
  );
  background-clip: text;
  color: transparent;
  animation: rainbow-animation 2s;
  background-size: 400% 100%;
}

@keyframes rainbow-animation {
  0%,
  100% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }
}
</style>
