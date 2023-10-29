<script lang="ts">
import { defineComponent } from "vue";
import { useBem } from "@/utilities/bem";

export default defineComponent({
  setup() {
    const supabase = useSupabaseClient();
    const bem = useBem("Register");
    const email = ref("");
    const signInWithOtp = async () => {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.value,
        options: {
          emailRedirectTo: "http://localhost:3000/dashboard",
        },
      });
      if (error) console.log(error);
    };

    return { bem, signInWithOtp, email };
  },
});
</script>

<template>
  <div>
    <button @click="signInWithOtp">Sign In with E-Mail</button>
    <input v-model="email" type="email" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/colors";

/* define HomePage */

.HomePage {
  align-items: center;
  border: 2px solid gold;
  display: flex;
  justify-content: center;
  height: calc(100vh - 49.5px);
}
</style>
