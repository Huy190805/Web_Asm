document.addEventListener("DOMContentLoaded", () => {
    // Login form logic
    const loginForm = document.querySelector(".form.login form");
    if (loginForm && window.location.pathname.includes("login.html")) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission to server

            // Get the input values
            const email = document.querySelector(".form.login input[name='email']").value;
            const password = document.querySelector(".form.login input[name='password']").value;

            if (email === "" || password === "") {
                alert("Please enter your email and password!");
                return;
            }

            // Get the user object from localStorage
            const user = JSON.parse(localStorage.getItem(email));

            // Validate credentials
            if (user && user.password === password) {
                // Save the logged-in user's data
                localStorage.setItem("loggedInUser", JSON.stringify(user));

                alert("Login successful!");
                window.location.href = "Home.html"; // Redirect to profile page
            } else {
                alert("Invalid email or password!");
            }
        });
    }

    
});

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector(".form.login form");

    if (registerForm && window.location.pathname.includes("register.html")) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission

            // Get user inputs
            const email = document.querySelector(".form.login input[name='email']").value;
            const password = document.querySelector(".form.login input[name='password']").value;

            if (!email || !password) {
                alert("Please fill out all fields!");
                return;
            }

            // Check if user already exists
            if (localStorage.getItem(email)) {
                alert("User already exists! Please log in.");
                return;
            }

            // Save the new user
            const user = {
                email: email,
                password: password,
                name: "New User" // Add more fields if needed
            };

            localStorage.setItem(email, JSON.stringify(user)); // Save user data in localStorage

            alert("Registration successful! You can now log in.");
            window.location.href = "login.html"; // Redirect to login page
        });
    }
});

