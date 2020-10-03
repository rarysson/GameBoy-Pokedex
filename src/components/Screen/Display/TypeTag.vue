<template>
  <p class="tag-text" :class="type">{{ type }}</p>
</template>

<script>
export default {
  name: "TypeTag",

  props: {
    type: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.tag-text {
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  color: white;
  width: 50px;
}

.normal {
  background-color: #8a8a80;
}

.fire {
  background-color: #fe6148;
}

.water {
  background-color: #4b90d6;
}

.electric {
  background-color: #ffcc32;
}

.grass {
  background-color: #77cc55;
}

.ice {
  background-color: #7ed4ff;
}

.fighting {
  background-color: #ba5544;
}

.poison {
  background-color: #aa5599;
}

.ground {
  background-color: #d8bd6c;
}

.flying {
  background-color: #9aa9fe;
}

.psychic {
  background-color: #ff6fa9;
}

.bug {
  background-color: #aabb22;
}

.rock {
  background-color: #c5b67e;
}

.ghost {
  background-color: #7d7ec6;
}

.dragon {
  background-color: #7766ed;
}

.dark {
  background-color: #795848;
}

.steel {
  background-color: #b7b7c5;
}

.fairy {
  background-color: #f1a9f0;
}
</style>
