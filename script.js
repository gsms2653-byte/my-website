const SUPABASE_URL = "https://wrmapzyvzknwpltcljkq.supabase.co";
const SUPABASE_KEY = "sb_publishable_rr_aE278dZ5066OaO-kltA_TB4vbasz";

window.mySupabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase connected!");

