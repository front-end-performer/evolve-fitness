import { createClient } from "@supabase/supabase-js";

const URL = process.env.VUE_APP_SUPABASE_URL ?? "";
const KEY = process.env.VUE_APP_SUPABASE_KEY ?? "";

export const useSupabase = () => {
  return createClient(URL, KEY);
};
