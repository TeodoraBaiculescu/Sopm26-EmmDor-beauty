
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
