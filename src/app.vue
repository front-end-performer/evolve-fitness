<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";

export default defineComponent({
  components: {
    PageHeaderTop: () /* webpackPrefetch: true */ =>
      import("@/components/page-header/PageHeaderTop.vue"),
  },
  setup() {
    const { finalizePendingLocaleChange } = useI18n();

    onBeforeMount(() => {
      finalizePendingLocaleChange();
    });
  },
});
</script>

<template>
  <main id="app">
    <ClientOnly>
      <PageHeaderTop />
      <NuxtPage />
    </ClientOnly>
  </main>
</template>
