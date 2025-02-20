document.getElementById("login-btn")?.addEventListener("click", () => loadPage("login"));
document.getElementById("signup-btn")?.addEventListener("click", () => loadPage("signup"));

async function loadPage(page: string) {
    const content = document.getElementById("content")!;
    
    if (page === "login") {
        content.innerHTML = `
            <h2>Login</h2>
            <input id="login-username" type="text" placeholder="Username" />
            <input id="login-password" type="password" placeholder="Password" />
            <button id="login-submit">Login</button>
        `;

        document.getElementById("login-submit")?.addEventListener("click", login);
    } else if (page === "signup") {
        content.innerHTML = `
            <h2>Signup</h2>
            <input id="signup-username" type="text" placeholder="Username" />
            <input id="signup-password" type="password" placeholder="Password" />
            <button id="signup-submit">Signup</button>
        `;

        document.getElementById("signup-submit")?.addEventListener("click", signup);
    }
}

async function signup() {
    const username = (document.getElementById("signup-username") as HTMLInputElement).value;
    const password = (document.getElementById("signup-password") as HTMLInputElement).value;

    try {
        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            alert("Signup successful!");
            loadPage("login");  // Switch to login page
        } else {
            const errorData = await response.json();
            alert(errorData.error || "Signup failed.");
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("Error while signing up. Please try again.");
    }
}

async function login() {
    const username = (document.getElementById("login-username") as HTMLInputElement).value;
    const password = (document.getElementById("login-password") as HTMLInputElement).value;

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);  // Store the JWT token in localStorage
            alert("Login successful!");
        } else {
            const errorData = await response.json();
            alert(errorData.error || "Login failed.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("Error while logging in. Please try again.");
    }
}
// Initialize the page by loading the login form
loadPage("login");
