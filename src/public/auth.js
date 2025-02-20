"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
(_a = document.getElementById("login-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => loadPage("login"));
(_b = document.getElementById("signup-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => loadPage("signup"));
function loadPage(page) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const content = document.getElementById("content");
        if (page === "login") {
            content.innerHTML = `
            <h2>Login</h2>
            <input id="login-username" type="text" placeholder="Username" />
            <input id="login-password" type="password" placeholder="Password" />
            <button id="login-submit">Login</button>
        `;
            (_a = document.getElementById("login-submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", login);
        }
        else if (page === "signup") {
            content.innerHTML = `
            <h2>Signup</h2>
            <input id="signup-username" type="text" placeholder="Username" />
            <input id="signup-password" type="password" placeholder="Password" />
            <button id="signup-submit">Signup</button>
        `;
            (_b = document.getElementById("signup-submit")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", signup);
        }
    });
}
function signup() {
    return __awaiter(this, void 0, void 0, function* () {
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;
        try {
            const response = yield fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                alert("Signup successful!");
                loadPage("login"); // Switch to login page
            }
            else {
                const errorData = yield response.json();
                alert(errorData.error || "Signup failed.");
            }
        }
        catch (error) {
            console.error("Error during signup:", error);
            alert("Error while signing up. Please try again.");
        }
    });
}
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        try {
            const response = yield fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                const data = yield response.json();
                localStorage.setItem("token", data.token); // Store the JWT token in localStorage
                alert("Login successful!");
            }
            else {
                const errorData = yield response.json();
                alert(errorData.error || "Login failed.");
            }
        }
        catch (error) {
            console.error("Error during login:", error);
            alert("Error while logging in. Please try again.");
        }
    });
}
// Initialize the page by loading the login form
loadPage("login");
