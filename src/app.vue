<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";
import BasicHeader from "@/components/header/BasicHeader.vue";

export default defineComponent({
  components: {
    BasicHeader,
  },
  setup() {
    const bem = useBem("Main");
    const { finalizePendingLocaleChange } = useI18n();

    onBeforeMount(() => {
      finalizePendingLocaleChange();
    });

    return { bem };
  },
});
</script>

<template>
  <main id="app">
    <ClientOnly>
      <BasicHeader />
      <NuxtPage />
    </ClientOnly>
  </main>
</template>
