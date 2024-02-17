<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";
import BasicHeader from "@/components/header/BasicHeader.vue";
import BasicFooter from "@/components/BasicFooter.vue";

export default defineComponent({
  components: {
    BasicHeader,
    BasicFooter,
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
      <BasicFooter />
    </ClientOnly>
  </main>
</template>
