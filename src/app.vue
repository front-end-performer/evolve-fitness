<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PageHeaderTop: () /* webpackPrefetch: true */ =>
      import("@/components/page-header/PageHeaderTop.vue"),
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <main id="app">
    <ClientOnly>
      <PageHeaderTop />
    </ClientOnly>
  </main>
</template>
