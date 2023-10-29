<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  middleware: "auth",
  setup() {
    const bem = useBem("HomePage");

    return { bem };
  },
});
</script>

<template>
  <div :class="bem()">Index</div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";

/* define HomePage */

.HomePage {
  align-items: center;
  border: 2px solid gold;
  display: flex;
  justify-content: center;
  height: calc(100vh - 49.5px);
}
</style>
