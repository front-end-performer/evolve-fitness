<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  components: {},
  setup() {
    const bem = useBem("Dashboard");

    return { bem };
  },
});
</script>

<template>
  <div :class="bem()">
    <h1>{{ $t("globals.greeting") }} Dashboard</h1>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";

/* define Dashboard */

.Dashboard {
  align-items: center;
  border: 2px solid gold;
  display: flex;
  justify-content: center;
  height: calc(100vh - 47.5px);
}
</style>
