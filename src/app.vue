<script lang="ts">
import { defineComponent, ref } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  components: {
    PageHeaderTop: () /* webpackPrefetch: true */ =>
      import("@/components/page-header/PageHeaderTop.vue"),
  },
  setup() {
    const bem = useBem("Main");
    const { finalizePendingLocaleChange } = useI18n();
    // const supabase = useSupabaseClient();
    // const img = ref("");

    useAsyncData(async () => {
      // const { data: mockdata, error } = await supabase
      //   .from("mockdata")
      //   .select("label");
      // console.log(mockdata);
      // const { data } = supabase.storage
      //   .from("avatars")
      //   .getPublicUrl("logo.png");
      // console.log(data.publicUrl);
      // img.value = data.publicUrl;
    });

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
      <PageHeaderTop />
      <NuxtPage />
    </ClientOnly>
  </main>
</template>
