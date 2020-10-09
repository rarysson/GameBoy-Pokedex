<template>
  <div class="gameboy" ref="gameboy">
    <slot />
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
      recording_events: false,
      events: []
    };
  },

  created() {
    event_bus.$on("select", this.record_events);
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
    }
  }
};
</script>

<style scoped>
.gameboy {
  position: relative;
  width: 380px;
  height: 600px;
  border-radius: 15px;
  border-bottom-right-radius: 75px;
  background-color: var(--gameboy-color);
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
