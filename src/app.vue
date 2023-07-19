<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PageHeader: () /* webpackPrefetch: true */ =>
      import("@/components/page-header/PageHeader.vue"),
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <main>
    <PageHeader />
  </main>
</template>
