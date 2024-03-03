<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "../utilities/bem";

export default defineComponent({
  props: {
    alias: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "fas",
    },
    label: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "fa-lg",
    },
    spaceR: {
      type: String,
      default: "",
    },
    animationName: {
      type: String,
      default: "",
    },
  },
  setup() {
    const bem = useBem("FontIcon");
    const { windowWidth } = useBreakPoints();

    return { bem, windowWidth };
  },
});
</script>

<template>
  <div :class="bem()">
    <font-awesome-icon
      :icon="[type, alias]"
      :class="[bem('awesomeIcon'), size]"
    />
    {{ windowWidth >= 480 && label ? label : "" }}
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variables";
@import "@/assets/css/typography";

/* define FontIcon */

.FontIcon {
  @include font-default-small;

  align-items: center;
  display: flex;
}
</style>
