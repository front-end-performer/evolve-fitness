<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  setup() {
    const bem = useBem("BasicSection");

    return { bem };
  },
});
</script>

<template>
  <section :class="bem()">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables";
@import "@/assets/css/mixins";
@import "@/assets/css/typography";

/* define BasicSection */

.BasicSection {
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
}
</style>
