document.getElementById("idle")?.addEventListener("click", () => loadPage("idle"));

async function loadPage(page: string) {
    const content = document.getElementById("content")!;
    
    if (page === "login") {
        content.innerHTML = `
        <button id="signup-btn">Signup</button>
        <h2>Login</h2>
        <input id="login-username" type="text" placeholder="Username" />
        <input id="login-password" type="password" placeholder="Password" />
        <button id="login-submit">Login</button>
        `;
        document.getElementById("signup-btn")?.addEventListener("click", () => loadPage("signup"));
        document.getElementById("login-submit")?.addEventListener("click", login);
    } else if (page === "signup") {
        content.innerHTML = `
        <button id="login-btn">Login</button>
        <h2>Signup</h2>
        <input id="signup-username" type="text" placeholder="Username" />
        <input id="signup-password" type="password" placeholder="Password" />
        <button id="signup-submit">Signup</button>
        `;
        document.getElementById("login-btn")?.addEventListener("click", () => loadPage("login"));
        document.getElementById("signup-submit")?.addEventListener("click", signup);
    } else if (page === "idle"){
        const username = localStorage.getItem("username");
        content.innerHTML = `
        <h2>Welcome, ${username}!</h2>
        <button id="logout-btn">Logout</button>
        `;
        document.getElementById("logout-btn")?.addEventListener("click", logout);
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
            localStorage.setItem("username", username);
            alert("Login successful!"); //switch to idle page
            loadPage('idle');
        } else {
            const errorData = await response.json();
            alert(errorData.error || "Login failed.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("Error while logging in. Please try again.");
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    loadPage("login");
}
// Initialize the page by loading the login form
loadPage("login");