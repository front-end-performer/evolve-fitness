<script setup lang="ts">
import { useBem } from "./utilities/bem";
import BasicHeader from "@/components/header/BasicHeader.vue";
import BasicFooter from "@/components/BasicFooter.vue";

const bem = useBem("Main");
const { finalizePendingLocaleChange } = useI18n();

onBeforeMount(() => {
  finalizePendingLocaleChange();
});
</script>

<template>
  <main id="app" :class="bem('')">
    <ClientOnly>
      <BasicHeader />
      <NuxtPage />
      <BasicFooter />
    </ClientOnly>
  </main>
</template>
