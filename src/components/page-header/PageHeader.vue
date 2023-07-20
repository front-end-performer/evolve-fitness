<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  setup() {
    const bem = useBem("PageHeader");

    return { bem };
  },
});
</script>

<template>
  <div :class="bem()">
    <h2 :class="bem('header')">{{ $t("globals.greeting") }}</h2>
  </div>
</template>

<style lang="scss" scoped>
/** define PageHeader */

.PageHeader {
  border: 1px solid red;

  &-header {
    border: 1px solid green;
  }
}
</style>
