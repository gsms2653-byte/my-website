const SUPABASE_URL = "https://wrmapzyvzknwpltcljkq.supabase.co";
const SUPABASE_KEY = "sb_publishable_rr_aE278dZ5066OaO-kltA_TB4vbasz";

window.mySupabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase connected!");

const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const answers = {};

    for (const [key, value] of formData.entries()) {
        if (answers[key] !== undefined) {
            if (!Array.isArray(answers[key])) {
                answers[key] = [answers[key]];
            }
            answers[key].push(value);
        } else {
            answers[key] = value;
        }
    }

    const name = answers.jwb1 || "بدون اسم";

    const { data, error } = await window.mySupabaseClient
        .from("HsN")
        .insert([
            {
                name: name,
                answer: JSON.stringify(answers)
            }
        ]);

    if (error) {
        console.error("خطأ في حفظ الإجابات:", error.message);
        alert("ما انحفظت الإجابات. افتح Console وشوف الخطأ.");
        return;
    }

    alert("تم إرسال إجاباتك بنجاح!");
});