<script lang="ts">
import { defineComponent, watch } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  setup() {
    const bem = useBem("Confirm");
    const user = useSupabaseUser();

    watch(
      user,
      () => {
        if (user.value) {
          return navigateTo("/dashboard");
        }
      },
      { immediate: true },
    );

    return { bem };
  },
});
</script>

<template>
  <div :class="bem()">CONFIRM</div>
</template>
