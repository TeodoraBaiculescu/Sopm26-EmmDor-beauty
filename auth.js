
const SUPABASE_URL = "https://sueuglntjzjmoijcxakj.supabase.co";
const SUPABASE_KEY = "sb_publishable_tMdPMVopC-17r2lqXHC6WQ_D8PQXMeH";

// Funcții pentru înregistrarea și conectarea clienților.
// Biblioteca Supabase va fi încărcată în index.html.

let supabaseClient = null;

function initSupabaseAuth() {
    if (!window.supabase) {
        console.error("Biblioteca Supabase nu a fost încărcată.");
        return;
    }

    supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    console.log("Supabase este pregătit.");
}

async function registerUser(email, password) {
    if (!supabaseClient) {
        throw new Error("Conexiunea Supabase nu este inițializată.");
    }

    return await supabaseClient.auth.signUp({
        email: email,
        password: password
    });
}

async function loginUser(email, password) {
    if (!supabaseClient) {
        throw new Error("Conexiunea Supabase nu este inițializată.");
    }

    return await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });
}

async function logoutUser() {
    if (!supabaseClient) return;
    return await supabaseClient.auth.signOut();
}

async function getCurrentUser() {
    if (!supabaseClient) return null;

    const { data, error } = await supabaseClient.auth.getUser();

    if (error) return null;
    return data.user;
}

window.addEventListener("DOMContentLoaded", initSupabaseAuth);


document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("auth-screen");
    const form = document.getElementById("auth-form");
    const title = document.getElementById("auth-title");
    const description = document.getElementById("auth-description");
    const submit = document.getElementById("auth-submit");
    const switchBtn = document.getElementById("auth-switch");
    const continueBtn = document.getElementById("auth-continue");
    const message = document.getElementById("auth-message");

    if (!screen || !form) return;

    let isRegistering = false;

    screen.style.display = "flex";

    switchBtn.addEventListener("click", () => {
        isRegistering = !isRegistering;

        title.textContent = isRegistering ? "Creează un cont" : "Bine ai revenit!";
        description.textContent = isRegistering
            ? "Înregistrează-te la EmmDor Beauty."
            : "Conectează-te la contul tău.";
        submit.textContent = isRegistering ? "Creează unul" : "Intră în cont";
        switchBtn.textContent = isRegistering
            ? "Ai deja cont? Intră în cont"
            : "Nu ai cont? Creează unul";
        document.getElementById("auth-password").autocomplete =
            isRegistering ? "new-password" : "current-password";
        message.textContent = "";
        continueBtn.style.display = "none";
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("auth-email").value.trim();
        const password = document.getElementById("auth-password").value;

        submit.disabled = true;
        submit.textContent = "Se procesează...";
        message.textContent = "";

        try {
            const result = isRegistering
                ? await registerUser(email, password)
                : await loginUser(email, password);

            if (result.error) throw result.error;

            if (isRegistering) {
                message.style.color = "#287a45";
                message.textContent = result.data.session
                    ? "Cont creat cu succes!"
                    : "Cont creat! Verifică e-mailul pentru confirmare.";
                continueBtn.style.display = "inline-block";
            } else {
                message.style.color = "#287a45";
                message.textContent = "Te-ai conectat cu succes!";
                continueBtn.style.display = "inline-block";
            }
        } catch (error) {
            message.style.color = "#c62828";
            message.textContent = error.message || "A apărut o eroare.";
        } finally {
            submit.disabled = false;
            submit.textContent = isRegistering ? "Creează unul" : "Intră în cont";
        }
    });

    continueBtn.addEventListener("click", () => {
        screen.style.display = "none";
    });
});

