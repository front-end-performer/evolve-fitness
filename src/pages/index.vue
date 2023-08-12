<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  components: {},
  setup() {
    const bem = useBem("HomePage");

    return { bem };
  },
});
</script>

<template>
  <div :class="bem()"></div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";
@import "@/assets/css/typography";

/* define HomePage */

.HomePage {
}
</style>
