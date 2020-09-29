<template>
  <div>
    <off-on-detail />
    <vent-detail />
    <phones-detail />
  </div>
</template>

<script>
import OffOnDetail from "./GameBoyDetails/OffOnDetail";
import VentDetail from "./GameBoyDetails/VentDetail";
import PhonesDetail from "./GameBoyDetails/PhonesDetail";

export default {
  name: "GameBoyDetails",

  components: {
    OffOnDetail,
    VentDetail,
    PhonesDetail
  }
};
</script>
