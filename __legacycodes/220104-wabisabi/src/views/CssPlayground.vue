<template>
  <section id="css-playground">
    <CssWave />
  </section>
</template>
<script lang="ts">
import CssWave from "@/sketch/css/CssWave.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    CssWave,
  },
});
</script>
